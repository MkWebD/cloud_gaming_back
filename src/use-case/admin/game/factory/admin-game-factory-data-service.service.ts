import { Injectable } from '@nestjs/common';
import { CreateGfnGameDto } from 'src/core/dto/gfn/gfn-game.dto';
import { GfnGameEntity } from 'src/core/entity/gfn/gfn-game.entity';

@Injectable()
export class AdminGameFactoryService {
	createNewGfnGame(createGfnGameDto: CreateGfnGameDto): GfnGameEntity {
		const { id, sortName, title } = createGfnGameDto;
		return new GfnGameEntity({ id, sortName, title });
	}
}
