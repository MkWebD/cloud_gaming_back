import { GfnGameModel } from './model/gfn/gfn-game.model';
import { GfnVariantsModel } from './model/gfn/gfn-variants.model';
import { TypeOrmGenericRepository } from './type-orm-generic-repository';

/**
 * Type ORM Generic Data Services
 * Abstract class for TypeORM generic data services
 */
export abstract class TypeOrmGenericDataServices {
	abstract gfnGamePersistenceRepository: TypeOrmGenericRepository<GfnGameModel>;
	abstract gfnVariantsPersistenceRepository: TypeOrmGenericRepository<GfnVariantsModel>;
}
