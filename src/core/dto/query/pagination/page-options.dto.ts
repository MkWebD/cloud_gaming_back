import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { Order } from 'interface/query/page-parameters.interface';
import { OptionsDto } from '../options.dto';

const minimumValue = 1;
const maximumValue = 50;
const takeDefaultValue = 10;

export class PageOptionsDto extends OptionsDto {
	@ApiPropertyOptional({ default: Order.ASC, enum: Order })
	@IsEnum(Order)
	@IsOptional()
	readonly order?: Order = Order.ASC;

	@ApiPropertyOptional({
		default: minimumValue,
		minimum: minimumValue,
	})
	@Type(() => Number)
	@IsInt()
	@Min(minimumValue)
	@IsOptional()
	readonly page?: number = minimumValue;

	@ApiPropertyOptional({
		default: takeDefaultValue,
		maximum: maximumValue,
		minimum: minimumValue,
	})
	@Type(() => Number)
	@IsInt()
	@Min(minimumValue)
	@Max(maximumValue)
	@IsOptional()
	readonly take?: number = takeDefaultValue;

	get skip(): number {
		return (this.page - minimumValue) * this.take;
	}
}
