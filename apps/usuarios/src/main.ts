import { NestFactory } from '@nestjs/core';
import { UsuariosModule } from './usuarios.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UsuariosModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'usuarios_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  app.listen().then(()=> {
    console.log('usuarios servicio escuchando')
  });
}
bootstrap();
