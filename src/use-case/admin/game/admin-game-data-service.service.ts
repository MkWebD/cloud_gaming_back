import { Injectable, NotFoundException } from '@nestjs/common';
import { GenericDataServices } from 'src/core/abstract/generic-data-services.abstract';
import { GenericRepository } from 'src/core/abstract/generic-repository.abstract';
import { CreateGfnGameDto, UpdateGfnGameDto } from 'src/core/dto/gfn/gfn-game.dto';
import { GenericOptionsDto } from 'src/core/dto/query/generic-options.dto';
import { GfnGameEntity } from 'src/core/entity/gfn/gfn-game.entity';
import { GfnGameModel } from 'src/framework/data-service/type-orm/model/gfn/gfn-game.model';
import { TypeOrmGenericDataServices } from 'src/framework/data-service/type-orm/type-orm-generic-data-services.abstract';
import { TypeOrmGenericRepository } from 'src/framework/data-service/type-orm/type-orm-generic-repository';
import { FindOneOptions } from 'typeorm';
import { AdminGameFactoryService } from './factory/admin-game-factory-data-service.service';
import { AdminGameDtoMapperServices } from './mapper/admin-game-dto-mapper.service';

@Injectable()
export class AdminGameDataServices implements Pick<GenericDataServices, 'gfnGames'> {
	constructor(
		protected dataServices: TypeOrmGenericDataServices,
		protected gfnGameDtoMapperServices: AdminGameDtoMapperServices,
		protected gfnGameFactoryServices: AdminGameFactoryService,
	) {}
	gfnGames: GenericRepository<GfnGameEntity, CreateGfnGameDto, UpdateGfnGameDto> = {
		create: async (createGfnGameDto) =>
			this.createEntity(createGfnGameDto, this.dataServices.gfnGamePersistenceRepository),
		delete: async (id) => this.deleteEntity({ where: { id } }, this.dataServices.gfnGamePersistenceRepository),
		readAll: async (pageOptionsDto) => {
			const gfnGameModels = await this.dataServices.gfnGamePersistenceRepository.readAllModel(pageOptionsDto);
			return this.constructMultipleEntitiesFromModels(gfnGameModels);
		},
		readOne: async (id: number) => {
			const gfnGameModel = await this.getData(this.dataServices.gfnGamePersistenceRepository, {
				comment: 'Geforce now game model',
				where: { id },
			});
			return this.constructEntityFromModel(gfnGameModel);
		},
		update: async (id, UpdateGfnGameDto) =>
			this.updateEntity({ where: { id } }, UpdateGfnGameDto, this.dataServices.gfnGamePersistenceRepository),
	};

	public async readOneByName(sortName: string): Promise<GfnGameEntity> {
		const gfnGameModel = await this.getData(this.dataServices.gfnGamePersistenceRepository, {
			comment: 'Geforce now game model',
			where: { sortName },
		});
		return this.constructEntityFromModel(gfnGameModel);
	}

	private async createEntity(
		dto: CreateGfnGameDto,
		repository: TypeOrmGenericRepository<GfnGameModel>,
	): Promise<GfnGameEntity> {
		const model = await this.createData(dto, repository);
		return this.constructEntityFromModel(model);
	}

	private async createData(
		dto: CreateGfnGameDto,
		repository: TypeOrmGenericRepository<GfnGameModel>,
	): Promise<GfnGameModel> {
		const model = this.prepareModelForCreationOrUpdate(dto);

		return repository.createModel(model);
	}

	private async constructEntityFromModel(model: GfnGameModel): Promise<GfnGameEntity> {
		const dto = await this.mapModelToDto(model);
		return this.createWithFactory(dto);
	}

	private async constructMultipleEntitiesFromModels(
		models: GenericOptionsDto<GfnGameModel>,
	): Promise<GenericOptionsDto<GfnGameEntity>> {
		const entitiesPromises = models.data.map(async (model) => this.constructEntityFromModel(model));
		return { data: await Promise.all(entitiesPromises), meta: models.meta };
	}

	private async getData(
		repository: TypeOrmGenericRepository<GfnGameModel>,
		options?: FindOneOptions<GfnGameModel>,
	): Promise<GfnGameModel> {
		const data = await repository.readOneModel(options);
		if (!data) {
			const comment = options.comment;
			const id = 'id' in options.where ? options.where.id : '';
			const sortName = 'sortName' in options.where ? options.where.sortName : '';

			const message = comment
				? `No ${comment} found with ${id ? 'id' : 'name'}: ${sortName === '' ? id : sortName}`
				: `No data found with ${id ?? sortName}`;
			throw new NotFoundException(message);
		}
		return data;
	}

	/**
	 * Deletes the data model
	 * @param options - The options used to find which model to delete
	 * @param repository - The repository from which to delete the model
	 * @returns - The deleted model
	 */
	protected async deleteData(
		options: FindOneOptions<GfnGameModel>,
		repository: TypeOrmGenericRepository<GfnGameModel>,
	) {
		return repository.deleteModel(options);
	}

	private async deleteEntity(
		options: FindOneOptions<GfnGameModel>,
		repository: TypeOrmGenericRepository<GfnGameModel>,
	): Promise<GfnGameEntity> {
		const deletedModel = await this.deleteData(options, repository);
		return this.constructEntityFromModel(deletedModel);
	}

	/**
	 * Prepares a model for update
	 * @param dto - The dto used for updating the model
	 * @returns - The prepared model without the id
	 */
	private prepareModelForUpdate(dto: UpdateGfnGameDto): GfnGameModel {
		return this.prepareModelForCreationOrUpdate(dto);
	}

	/**
	 * Updates a model
	 * @param options - The options used to find the model to update
	 * @param dto - The dto used for updating the model
	 * @param repository - The repository in which the model is persisted
	 * @returns - The updated model
	 */
	private async updateData(
		options: FindOneOptions<GfnGameModel>,
		dto: UpdateGfnGameDto,
		repository: TypeOrmGenericRepository<GfnGameModel>,
	): Promise<GfnGameModel> {
		const model = this.prepareModelForUpdate(dto);
		return repository.updateModel(options, model);
	}

	private async updateEntity(
		options: FindOneOptions<GfnGameModel>,
		dto: UpdateGfnGameDto,
		repository: TypeOrmGenericRepository<GfnGameModel>,
	): Promise<GfnGameEntity> {
		const updatedModel = await this.updateData(options, dto, repository);
		return this.constructEntityFromModel(updatedModel);
	}

	//TODO: This is a method that needs to be implemented for each model
	private prepareModelForCreationOrUpdate(dto: CreateGfnGameDto | UpdateGfnGameDto): GfnGameModel {
		return this.gfnGameDtoMapperServices.mapGfnGameDtoToGfnGameModel(dto);
	}

	//TODO: This is a method that needs to be implemented for each model
	private async mapModelToDto(model: GfnGameModel): Promise<CreateGfnGameDto> {
		return this.gfnGameDtoMapperServices.mapGfnGameModelToGfnGameDto(model);
	}

	//TODO: This is a method that needs to be implemented for each model
	private createWithFactory(dto: CreateGfnGameDto): GfnGameEntity {
		return this.gfnGameFactoryServices.createNewGfnGame(dto);
	}
}
