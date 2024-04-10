import { GenericOptionsDto } from '../dto/query/generic-options.dto';
import { PageOptionsDto } from '../dto/query/pagination/page-options.dto';

/**
 * Generic Repository Abstract Class
 * 3 Typescript Generics are required:
 * 1. Entity Type
 * 2. Create Entity DTO Type
 * 3. Update Entity DTO Type
 */
export abstract class GenericRepository<EntityType, CreateEntityDtoType, UpdateEntityDtoType> {
	/**
	 * Generic create method
	 * @param createEntityDto - create entity dto
	 * @param userId - user id
	 * @param additionalId - additional id
	 */
	abstract create(createEntityDto: CreateEntityDtoType, userId: string, additionalId?: number): Promise<EntityType>;

	/**
	 * Generic read all method could be paginated
	 * @param options - find many options
	 * @param userId - user id
	 */
	abstract readAll(pageOptionsDto: PageOptionsDto, userId?: number): Promise<GenericOptionsDto<EntityType>>;
	/**
	 * Generic read one method
	 * @param id - entity id
	 * @param additionalId - additional id
	 */
	abstract readOne(id: string, additionalId?: number): Promise<EntityType>;

	/**
	 * Generic update method
	 * @param id - entity id
	 * @param updateEntityDto - update entity dto
	 * @param userId - user id
	 * @param additionalId - additional id
	 */
	abstract update(
		id: number,
		updateEntityDto: UpdateEntityDtoType,
		userId: string,
		additionalId?: number,
	): Promise<EntityType>;

	/**
	 * Generic delete method
	 * @param id - entity id
	 * @param additionalId - additional id
	 */
	abstract delete(id: number, additionalId?: number): Promise<EntityType>;
}
