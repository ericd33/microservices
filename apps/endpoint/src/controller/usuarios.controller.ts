import { Controller, Get, Inject, Body, Post, Param, Query, ValidationPipe, UsePipes} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from '../service/app.service';
import { RespuestaToken } from '../dto/Token';
import { DatosLoginDto } from '../dto/DatosLoginDto';
import { Observable } from 'rxjs';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    @Inject('USUARIOS_SERVICE') private usuariosClient: ClientProxy,
    private readonly appService: AppService) {}

  @Get('users')
  getUsers(): any {
    const res = this.usuariosClient.send('get_users',{});
    return res;
  }

  /*
  * Inicia la sesion del usuario, devuelve un token
  */
  @Post('login')
  @UsePipes(ValidationPipe)
  logIn(@Body() datosLogin: DatosLoginDto): Observable<any[]> {
    return this.usuariosClient.send('login_usuario',datosLogin);
  }

  
}
