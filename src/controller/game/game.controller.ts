import { Controller, Get, Param, Query } from '@nestjs/common';
import { GameList } from 'src/use-case/game/game-data-service.service';
import { GameUseCases } from 'src/use-case/game/game.use-case';

@Controller('game')
export class GameController {
	constructor(private readonly gameUseCases: GameUseCases) {}

	@Get()
	getGameCount(@Query('platform') platform: string, @Query('letter') letter: string): Promise<number> {
		return this.gameUseCases.getGameCount(platform, letter);
	}

	@Get(':letter')
	getGameListByLetter(@Query('platform') platform: string, @Param('letter') letter: string): Promise<GameList> {
		return this.gameUseCases.getGameListByLetter(platform, letter);
	}
}
