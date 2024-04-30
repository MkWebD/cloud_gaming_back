import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe({ transform: true }));
	const configService = app.get(ConfigService);
	const swaggerConfiguration = new DocumentBuilder()
		.setTitle('Cloud gaming API')
		.setDescription('The cloud gaming API description')
		.setVersion('1.0')
		.build();
	const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfiguration);
	SwaggerModule.setup('api/swagger', app, swaggerDocument);
	await app.listen(configService.get('application.applicationPort'));
}
bootstrap();
