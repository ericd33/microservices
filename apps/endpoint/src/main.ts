import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000).then(()=> {
    console.log('Servicio de Endpoint escuchando')
  });
}
bootstrap();
