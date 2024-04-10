import { ApiProperty } from '@nestjs/swagger';
import { PageDtoParameters } from 'interface/query/page-parameters.interface';
import { OptionsMetaDto } from '../options-meta.dto';

export class PageMetaDto extends OptionsMetaDto {
	@ApiProperty()
	readonly page?: number;

	@ApiProperty()
	readonly take?: number;

	@ApiProperty()
	readonly itemCount?: number;

	@ApiProperty()
	readonly pageCount?: number;

	@ApiProperty()
	readonly hasPreviousPage?: boolean;

	@ApiProperty()
	readonly hasNextPage?: boolean;

	constructor({ itemCount, optionsDto, pageOptionsDto }: PageDtoParameters) {
		super({ optionsDto });
		if (pageOptionsDto) {
			this.page = pageOptionsDto.page;
			this.take = pageOptionsDto.take;
			this.itemCount = itemCount;
			this.pageCount = Math.ceil(this.itemCount / this.take);
			this.hasPreviousPage = this.page > 1;
			this.hasNextPage = this.page < this.pageCount;
		}
	}
}
