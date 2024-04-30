import { Module } from '@nestjs/common';
import { AdminGameController } from 'src/controller/admin/game/admin-game.controller';
import { TypeOrmDataServicesModule } from 'src/framework/data-service/type-orm/type-orm-data-services.module';
import { AdminGameDataServices } from './admin-game-data-service.service';
import { AdminGameUseCases } from './admin-game.use-case';
import { AdminGameFactoryService } from './factory/admin-game-factory-data-service.service';
import { AdminGameDtoMapperServices } from './mapper/admin-game-dto-mapper.service';

@Module({
	controllers: [AdminGameController],
	exports: [AdminGameUseCases],
	imports: [TypeOrmDataServicesModule],
	providers: [AdminGameDataServices, AdminGameUseCases, AdminGameFactoryService, AdminGameDtoMapperServices],
})
export class AdminGameUseCasesModule {}
