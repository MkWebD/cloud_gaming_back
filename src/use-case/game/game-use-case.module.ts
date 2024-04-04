import { Module } from '@nestjs/common';
import { GameController } from 'src/controller/game/game.controller';
import { GameDataService } from './game-data-service.service';
import { GameUseCases } from './game.use-case';

@Module({
	controllers: [GameController],
	exports: [GameUseCases],
	providers: [GameDataService, GameUseCases],
})
export class GameUseCasesModule {}
