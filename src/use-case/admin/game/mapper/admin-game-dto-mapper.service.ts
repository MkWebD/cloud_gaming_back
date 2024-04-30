import { Injectable } from '@nestjs/common';
import { CreateGfnGameDto, UpdateGfnGameDto } from 'src/core/dto/gfn/gfn-game.dto';
import { GfnGameModel } from 'src/framework/data-service/type-orm/model/gfn/gfn-game.model';

@Injectable()
export class AdminGameDtoMapperServices {
	mapGfnGameDtoToGfnGameModel(gfnGameDto: CreateGfnGameDto | UpdateGfnGameDto): GfnGameModel {
		const model: GfnGameModel = {
			sortName: gfnGameDto.sortName,
			title: gfnGameDto.title,
		};
		if (gfnGameDto.id) {
			model.id = Number(gfnGameDto.id);
		}
		return model;
	}

	mapGfnGameModelToGfnGameDto(gfnGameModel: GfnGameModel): CreateGfnGameDto {
		const { id, sortName, title } = gfnGameModel;
		const mappedGfnGameModel: CreateGfnGameDto = {
			id,
			sortName,
			title,
		};
		return mappedGfnGameModel;
	}
}
