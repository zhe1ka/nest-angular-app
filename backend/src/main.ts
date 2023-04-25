import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = 3000;
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: false, // for prod set "true"
    }),
  );
  app.setGlobalPrefix('api');

  await app.listen(PORT, () => {
    console.log('Server is run on PORT:', PORT);
  });
}
bootstrap();
