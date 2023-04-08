import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración Swagger en NestJS
  const config = new DocumentBuilder()
    .setTitle('Store API')
    .setDescription('Documentación Store')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // URL API
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove all properties that are not defined in the DTO
      forbidNonWhitelisted: true, // throw an error if a property is not defined in the DTO
    }),
  );
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
