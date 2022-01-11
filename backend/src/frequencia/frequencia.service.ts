import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFrequenciaDto } from './dto/create-frequencia.dto';
import { UpdateFrequenciaDto } from './dto/update-frequencia.dto';

@Injectable()
export class FrequenciaService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreateFrequenciaDto) {
    return this.prismaService.frequencia.create({ data });
  }

  findAll() {
    return this.prismaService.frequencia.findMany({
      include: {
        Servidor: true
      },
    });
  }

  findById(id: string) {
    return this.prismaService.frequencia.findMany({
      where: {
        servidorId: id,
      },
      include: {
        Servidor: true
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.frequencia.findFirst({ where: { id } });
  }

  update(id: number, data: UpdateFrequenciaDto) {
    return this.prismaService.frequencia.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prismaService.frequencia.delete({ where: { id } });
  }
}
