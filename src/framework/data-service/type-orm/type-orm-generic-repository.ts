import { NotFoundException } from '@nestjs/common';
import { GenericOptionsDto } from 'src/core/dto/query/generic-options.dto';
import { PageMetaDto } from 'src/core/dto/query/pagination/page-meta.dto';
import { PageOptionsDto } from 'src/core/dto/query/pagination/page-options.dto';
import {
	FindManyOptions,
	FindOneOptions,
	FindOptionsRelationByString,
	FindOptionsRelations,
	Repository,
	SelectQueryBuilder,
} from 'typeorm';
import { ModelGenericRepository } from './model-generic-repository.abstract';

/**
 * Generic repository for TypeOrm layer
 */
export class TypeOrmGenericRepository<T> implements ModelGenericRepository<T> {
	private _repository: Repository<T>;

	constructor(repository: Repository<T>) {
		this._repository = repository;
	}

	/**
	 * Saves a model to the database using session variable for logged user and returns the saved model
	 * @param model - the prepared model to save
	 * @param userId - the logged user id
	 * @returns - the saved model
	 */
	async createModel(model: T, userId: string): Promise<T> {
		try {
			return this._repository.manager.transaction(async () => {
				if (userId) {
					await this._repository.query(`SET SESSION "logged.user_id" = '${userId}';`);
				}
				return this._repository.save(model);
			});
		} catch (error) {
			throw new Error(error);
		}
	}

	/**
	 * Applies nested relations to a query
	 * @param query - the query to apply the relations to
	 * @param basePath - the base path of the query
	 * @param relations - the relations to apply
	 * @param parentAlias - the parent alias
	 * @returns - the query with the relations applied
	 */
	//TODO: Move this function in a helper function
	applyNestedRelations(
		query: SelectQueryBuilder<T>,
		basePath: string,
		relations: FindOptionsRelations<T> | FindOptionsRelationByString,
		parentAlias = '',
	) {
		for (const [relationKey, relationValue] of Object.entries(relations)) {
			const alias = parentAlias ? `${parentAlias}_${relationKey}` : relationKey;
			const firstLevelPath = `${basePath}.${relationKey}`;
			query = query.leftJoinAndSelect(firstLevelPath, alias);

			// If the relation has nested relations, handle them recursively
			if (typeof relationValue === 'object' && relationValue !== null) {
				query = this.applyNestedRelations(query, alias, relationValue, alias);
			}
		}
		return query;
	}

	/**
	 * Get all models from the database using pagination options
	 * @param pageOptionsDto - can be passed, if not default values are used
	 * @param findManyOptions - can be passed, if not default values are used
	 * @returns - an array of models
	 */
	async readAllModel(
		pageOptionsDto: PageOptionsDto,
		findManyOptions?: FindManyOptions<T>,
	): Promise<GenericOptionsDto<T>> {
		try {
			let query = this._repository.createQueryBuilder();
			if (findManyOptions?.relations) {
				query = this.applyNestedRelations(query, this._repository.metadata.name, findManyOptions.relations);
			}

			if (findManyOptions?.where) {
				query = query.where(findManyOptions.where);
			}

			if (pageOptionsDto?.pattern) {
				query = query.where(`${this._repository.metadata.name}.name LIKE :pattern`, {
					pattern: `%${pageOptionsDto.pattern}%`,
				});
			}

			if (pageOptionsDto?.page) {
				query = query
					.skip(pageOptionsDto.skip)
					.take(pageOptionsDto.take)
					.orderBy(`${this._repository.metadata.name}.id`, pageOptionsDto.order);
			}
			const itemCount = await query.getCount();
			const entities = await query.getMany();

			const optionsMetaDto = new PageMetaDto({
				itemCount,
				optionsDto: pageOptionsDto,
				pageOptionsDto,
			});

			return new GenericOptionsDto(entities, optionsMetaDto);
		} catch (error) {
			throw new NotFoundException(error);
		}
	}

	/**
	 * Get one model from the database using criteria
	 * @param options - criteria to find the model
	 * @returns - a single model
	 */
	async readOneModel(options: FindOneOptions<T>): Promise<T> {
		try {
			const entity = await this._repository.findOne(options);

			return entity ?? null;
		} catch (error) {
			throw new NotFoundException(error);
		}
	}

	/**
	 * Update a model in the database using criteria and returns the updated model
	 * @param options - criteria to find the model
	 * @param model - the update model to save
	 * @param userId - Id of the user responsible for the action
	 * @returns - the updated model
	 */
	async updateModel(options: FindOneOptions<T>, model: T, userId: string): Promise<T> {
		try {
			const entityToUpdate = await this.readOneModel(options);
			if (!entityToUpdate) {
				throw new NotFoundException('No entity found');
			}

			return this._repository.manager.transaction(async () => {
				await this._repository.query(`SET SESSION "logged.user_id" = '${userId}';`);
				return this._repository.save(this.deepMergeEntity(entityToUpdate, model));
			});
		} catch (error) {
			throw new NotFoundException(error);
		}
	}

	/**
	 * Makes a deep merge of nested objects
	 * @param existingEntity - The existing entity to merge
	 * @param newValues - The new values that needs to be merged in the existing entity
	 * @returns - A new object with all values updated
	 */
	//TODO: Move this function in a helper function
	private deepMergeEntity(existingEntity: T, newValues: Partial<T>) {
		for (const key of Object.keys(newValues)) {
			const propertyKey = key as keyof T;

			if (newValues[propertyKey] && typeof newValues[propertyKey] === 'object') {
				if (existingEntity[propertyKey] && typeof existingEntity[propertyKey] === 'object') {
					// Here we use type assertion to satisfy TypeScript's type checking
					// We assert that existingEntity[propKey] and newValues[propKey] are of the same type
					this.deepMergeEntity(existingEntity[propertyKey] as any, newValues[propertyKey] as any);
				} else {
					existingEntity[propertyKey] = newValues[propertyKey];
				}
			} else {
				existingEntity[propertyKey] = newValues[propertyKey];
			}
		}
		return existingEntity;
	}

	/**
	 * Delete a model in the database using criteria and returns the deleted model
	 * @param options - criteria to find the model
	 * @returns - the deleted model
	 */
	async deleteModel(options: FindOneOptions<T>): Promise<T> {
		try {
			const entity = await this.readOneModel(options);
			if (!entity) {
				throw new NotFoundException();
			}

			await this._repository.remove([entity]);
			return entity;
		} catch (error) {
			throw new NotFoundException(error);
		}
	}
}
