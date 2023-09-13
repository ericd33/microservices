import { Controller, Get } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { UsuariosService } from './usuarios.service';
import { Observable } from 'rxjs';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

@Controller()
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @EventPattern('login_usuario') 
  async getUser(data) {
    
    console.log(data);
    return 'asdsad';
  }
}
