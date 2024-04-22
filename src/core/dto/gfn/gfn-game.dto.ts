import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

/**
 * Geforce Now Game DTO
 */
export class CreateGfnGameDto {
	@IsOptional()
	id: number;

	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsNotEmpty()
	sortName: string;
}

/**
 * Geforce Now Game DTO (update - partial)
 */
export class UpdateGfnGameDto extends PartialType(CreateGfnGameDto) {}
