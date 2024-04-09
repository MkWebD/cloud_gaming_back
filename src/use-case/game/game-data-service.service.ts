import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IgdbConfigurationProperties } from 'interface/igbd-configuration.interface';

type Cover = {
	alpha_channel: boolean;
	animated: boolean;
	checksum: string;
	game: number;
	game_localization: number;
	height: number;
	image_id: string;
	url: string;
	width: number;
};

type Game = {
	id: number;
	cover: Cover;
};

type ExtenalGame = {
	category: number;
	checksum: string;
	countries: number[];
	created_at: number;
	game: Game;
	media: number;
	name: string;
	platform: number;
	uid: string;
	updated_at: number;
	url: string;
	year: number;
};

export type GameList = {
	luna: ExtenalGame[];
	xbox: ExtenalGame[];
	gfn: [];
};

@Injectable()
export class GameDataService {
	constructor(private configService: ConfigService) {}

	private readonly clientId = this.configService.get<IgdbConfigurationProperties>('igdbApi').cliendId;
	private readonly token = this.configService.get<IgdbConfigurationProperties>('igdbApi').clientSecret;
	private readonly baseUrl = this.configService.get<IgdbConfigurationProperties>('igdbApi').baseUrl;
	private readonly limit = 200;
	private readonly headers = {
		Authorization: `Bearer ${this.token}`,
		'Client-ID': this.clientId,
		'Content-Type': 'application/json',
	};

	/**
	 * Create an array of platforms from the query string
	 * @param platform - The query string
	 * @returns - An array of platforms formatted for the IGDB API
	 */
	private createPlatformsArray(platform: string): string[] {
		const splittedArray = platform.split(',');
		const platforms: string[] = [];
		for (const platform of splittedArray) {
			if (platform === 'xbox') {
				platforms.push('54');
			}
			if (platform === 'luna') {
				platforms.push('22');
			}
		}
		return platforms;
	}

	/**
	 * Create a query for the IGDB API
	 * @param platform - The platform query parameter
	 * @param letter - The letter parameter
	 * @param sort - The sort parameter
	 * @param sort.field - The field parameter to sort by
	 * @param sort.order - The order parameter to sort by
	 * @param limit - The limit parameter
	 * @param extendedFields - The extended fields parameter
	 * @returns - The query string
	 */
	private createQuery(
		platform: string,
		letter: string,
		sort: { field: string; order: string },
		limit: number,
		extendedFields?: string,
	): string {
		const platforms = this.createPlatformsArray(platform)
			.map((platform) => `(category = ${platform} & name = "${letter}"* )`)
			.join(' | ');
		const additionalFields = extendedFields ? `,${extendedFields}` : '';
		return `where ${platforms}; fields *${additionalFields}; sort ${sort.field} ${sort.order}; limit ${limit};`;
	}

	/**
	 * Retrieve the count of games from the IGDB API
	 * @param platform - The platform query parameter
	 * @returns - The count of games
	 */
	async getGameCount(platform: string): Promise<number> {
		const body = this.createQuery(platform, 'Y', { field: 'name', order: 'asc' }, this.limit);
		if (platform) {
			const response = await fetch(`${this.baseUrl}/external_games/count`, {
				body,
				headers: this.headers,
				method: 'POST',
				mode: 'cors',
			});
			const result: { count: number } = await response.json();
			if (platform.split(',').includes('gfn')) {
			}

			return result.count;
		} else {
			throw new BadRequestException('Platform is required');
		}
	}

	/**
	 * Retrieve a list of games from a letter from the IGDB API
	 * @param platform - The platform query parameter
	 * @param letter - The letter parameter
	 * @returns - A list of games
	 */
	async getGameListByLetter(platform: string, letter: string): Promise<GameList> {
		const body = this.createQuery(
			platform,
			letter.toLocaleUpperCase(),
			{ field: 'name', order: 'asc' },
			this.limit,
			'game.cover.*',
		);
		const response = await fetch(`${this.baseUrl}/external_games`, {
			body,
			headers: this.headers,
			method: 'POST',
			mode: 'cors',
		});

		const result: ExtenalGame[] = await response.json();
		const sortedResult: GameList = {
			gfn: [],
			luna: [],
			xbox: [],
		};
		for (const game of result) {
			if (game.category === 54) {
				sortedResult.xbox.push(game);
			}
			if (game.category === 22) {
				sortedResult.luna.push(game);
			}
		}

		return sortedResult;
	}
}
