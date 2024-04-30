import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environmentConfiguration } from 'config/environment/environment-configuration';
import { AdminGameUseCasesModule } from './use-case/admin/game/admin-game-use-case.module';
import { GameUseCasesModule } from './use-case/game/game-use-case.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `${process.cwd()}/.env.local`,
			isGlobal: true,
			load: [environmentConfiguration],
		}),
		GameUseCasesModule,
		AdminGameUseCasesModule,
	],
})
export class AppModule {}
