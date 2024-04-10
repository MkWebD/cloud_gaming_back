import { GenericOptionsDto } from 'src/core/dto/query/generic-options.dto';
import { OptionsDto } from 'src/core/dto/query/options.dto';
import { FindOneOptions, FindOptionsWhere } from 'typeorm';

/**
 * Generic Model Repository Abstract Class
 */
export abstract class ModelGenericRepository<T> {
	abstract createModel(model: T, userId: string): Promise<T>;

	abstract readOneModel(id: FindOptionsWhere<T>): Promise<T>;

	abstract readAllModel(pageOptionsDto: OptionsDto): Promise<GenericOptionsDto<T>>;

	abstract updateModel(id: FindOptionsWhere<T>, model: T, userId: string): Promise<T>;

	abstract deleteModel(options: FindOneOptions<T>): Promise<T>;
}
