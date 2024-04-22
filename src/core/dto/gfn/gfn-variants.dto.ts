import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Geforce Now Variants DTO
 */
export class CreateGfnVariantsDto {
	@IsString()
	@IsNotEmpty()
	appStore: string;

	@IsString()
	@IsNotEmpty()
	publisherName: string;
}

/**
 * Geforce Now Variants DTO (update - partial)
 */
export class UpdateGfnVariantsDto extends PartialType(CreateGfnVariantsDto) {}
