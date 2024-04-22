import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GfnGameModel } from './model/gfn/gfn-game.model';
import { GfnVariantsModel } from './model/gfn/gfn-variants.model';
import { TypeOrmGenericDataServices } from './type-orm-generic-data-services.abstract';
import { TypeOrmGenericRepository } from './type-orm-generic-repository';

/**
 * Type ORM Data Services
 * Injects TypeORM repositories and initializes generic data services
 */
@Injectable()
export class TypeOrmDataServices implements TypeOrmGenericDataServices, OnApplicationBootstrap {
	gfnGamePersistenceRepository: TypeOrmGenericRepository<GfnGameModel>;
	gfnVariantsPersistenceRepository: TypeOrmGenericRepository<GfnVariantsModel>;
	constructor(
		@InjectRepository(GfnGameModel)
		private readonly gfnGameRepository: Repository<GfnGameModel>,
		@InjectRepository(GfnVariantsModel)
		private readonly gfnVariantsRepository: Repository<GfnVariantsModel>,
	) {}

	onApplicationBootstrap() {
		this.gfnGamePersistenceRepository = new TypeOrmGenericRepository<GfnGameModel>(this.gfnGameRepository);
		this.gfnVariantsPersistenceRepository = new TypeOrmGenericRepository<GfnVariantsModel>(this.gfnVariantsRepository);
	}
}
