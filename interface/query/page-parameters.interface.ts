import { PageOptionsDto } from 'src/core/dto/query/pagination/page-options.dto';
import { OptionsDtoParameters } from './options-parameters.interface';

export enum Order {
	ASC = 'ASC',
	DESC = 'DESC',
}

/**
 * PageDtoParameters Interface
 */
export interface PageDtoParameters extends OptionsDtoParameters {
	pageOptionsDto: PageOptionsDto;
	itemCount: number;
}
