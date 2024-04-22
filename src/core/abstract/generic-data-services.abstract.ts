import { CreateGfnGameDto, UpdateGfnGameDto } from '../dto/gfn/gfn-game.dto';
import { CreateGfnVariantsDto, UpdateGfnVariantsDto } from '../dto/gfn/gfn-variants.dto';
import { GfnGameEntity } from '../entity/gfn/gfn-game.entity';
import { GfnVariantsEntity } from '../entity/gfn/gfn-variants.entity';
import { GenericRepository } from './generic-repository.abstract';

/**
 * Generic Data Services with specific entity repositories
 */
export abstract class GenericDataServices {
	abstract gfnGames: GenericRepository<GfnGameEntity, CreateGfnGameDto, UpdateGfnGameDto>;
	abstract gfnVariants: GenericRepository<GfnVariantsEntity, CreateGfnVariantsDto, UpdateGfnVariantsDto>;
}
