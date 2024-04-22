import { Injectable } from '@nestjs/common';
import { GameDataService, GameList } from './game-data-service.service';

@Injectable()
export class GameUseCases {
	constructor(private readonly dataService: GameDataService) {}

	getGameCount(platform: string, letter: string): Promise<number> {
		return this.dataService.getGameCount(platform, letter);
	}

	getGameListByLetter(platform: string, letter: string): Promise<GameList> {
		return this.dataService.getGameListByLetter(platform, letter);
	}
}
