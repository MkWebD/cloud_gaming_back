import { ApiProperty } from '@nestjs/swagger';
import { OptionsDtoParameters } from 'interface/query/options-parameters.interface';

export class OptionsMetaDto {
	@ApiProperty()
	readonly pattern?: string;

	constructor({ optionsDto }: OptionsDtoParameters) {
		if (optionsDto?.pattern) {
			this.pattern = optionsDto.pattern;
		}
	}
}
