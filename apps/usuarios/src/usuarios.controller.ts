import { Controller, Get } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { UsuariosService } from './usuarios.service';
import { Observable } from 'rxjs';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

@Controller()
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @EventPattern('get_users') 
  async getUser(data:string) {
    
    console.log(await prisma.user.findFirst());
  }
}
