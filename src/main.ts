import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove all properties that are not defined in the DTO
      forbidNonWhitelisted: true, // throw an error if a property is not defined in the DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
