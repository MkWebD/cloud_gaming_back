import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigurationProperties } from 'interface/database-configuration.interface';
import { DataSource } from 'typeorm';
import { typeOrmEntities } from './model/type-orm-entities';
import { TypeOrmDataServices } from './type-orm-data-services.service';
import { TypeOrmGenericDataServices } from './type-orm-generic-data-services.abstract';

@Module({
	exports: [TypeOrmGenericDataServices],
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => {
				const { database, host, password, port, username }: DatabaseConfigurationProperties =
					configService.get('database');
				return {
					database,
					entities: typeOrmEntities,
					host,
					password,
					port,
					synchronize: false,
					type: 'postgres',
					username,
				};
			},
		}),
		TypeOrmModule.forFeature(typeOrmEntities),
	],
	providers: [
		{
			provide: TypeOrmGenericDataServices,
			useClass: TypeOrmDataServices,
		},
	],
})
export class TypeOrmDataServicesModule {
	constructor(private dataSource: DataSource) {}
}
