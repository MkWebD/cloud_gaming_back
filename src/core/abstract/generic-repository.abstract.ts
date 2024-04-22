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
	 */
	abstract create(createEntityDto: CreateEntityDtoType): Promise<EntityType>;

	/**
	 * Generic read all method could be paginated
	 * @param options - find many options
	 */
	abstract readAll(pageOptionsDto: PageOptionsDto): Promise<GenericOptionsDto<EntityType>>;
	/**
	 * Generic read one method
	 * @param id - entity id
	 */
	abstract readOne(id: number): Promise<EntityType>;

	/**
	 * Generic update method
	 * @param id - entity id
	 * @param updateEntityDto - update entity dto
	 */
	abstract update(id: number, updateEntityDto: UpdateEntityDtoType): Promise<EntityType>;

	/**
	 * Generic delete method
	 * @param id - entity id
	 */
	abstract delete(id: number): Promise<EntityType>;
}
