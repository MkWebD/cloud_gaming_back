import { Injectable } from '@nestjs/common';
import { CreateGfnGameDto, UpdateGfnGameDto } from 'src/core/dto/gfn/gfn-game.dto';
import { GenericOptionsDto } from 'src/core/dto/query/generic-options.dto';
import { PageOptionsDto } from 'src/core/dto/query/pagination/page-options.dto';
import { GfnGameEntity } from 'src/core/entity/gfn/gfn-game.entity';
import { AdminGameDataServices } from './admin-game-data-service.service';

@Injectable()
export class AdminGameUseCases {
	constructor(private readonly dataServices: AdminGameDataServices) {}

	createGfnGame(createGfnGameDto: CreateGfnGameDto): Promise<GfnGameEntity> {
		return this.dataServices.gfnGames.create(createGfnGameDto);
	}

	getGfnGames(pageOptionsDto: PageOptionsDto): Promise<GenericOptionsDto<GfnGameEntity>> {
		return this.dataServices.gfnGames.readAll(pageOptionsDto);
	}

	getOneGfnGame(id: number): Promise<GfnGameEntity> {
		return this.dataServices.gfnGames.readOne(id);
	}

	getOneGfnGameByName(name: string): Promise<GfnGameEntity> {
		return this.dataServices.readOneByName(name);
	}

	updateGfnGame(id: number, updateGfnGameDto: UpdateGfnGameDto): Promise<GfnGameEntity> {
		return this.dataServices.gfnGames.update(id, updateGfnGameDto);
	}

	deleteGfnGame(id: number): Promise<GfnGameEntity> {
		return this.dataServices.gfnGames.delete(id);
	}
}
