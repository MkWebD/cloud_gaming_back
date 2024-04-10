import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmGenericDataServices } from './type-orm-generic-data-services.abstract';

@Injectable()
export class TypeOrmDataServices implements TypeOrmGenericDataServices, OnApplicationBootstrap {
	constructor() {}
	onApplicationBootstrap() {}
}
