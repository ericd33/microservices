import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsuariosController } from '../controller/usuarios.controller';
import { AppService } from '../service/app.service';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'USUARIOS_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'usuarios_queue',
        queueOptions: {
          durable: false
        }
      }
    }
  ])],
  controllers: [UsuariosController],
  providers: [AppService],
})
export class AppModule {}
