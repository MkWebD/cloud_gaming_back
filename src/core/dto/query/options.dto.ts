import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class OptionsDto {
	@ApiPropertyOptional()
	@Type(() => String)
	@IsString()
	@IsOptional()
	pattern?: string;
}
