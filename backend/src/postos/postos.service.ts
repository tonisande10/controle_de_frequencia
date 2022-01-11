import { Injectable } from '@nestjs/common';
import { TipoPosto } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreatePostoDto } from './dto/create-posto.dto';
import { UpdatePostoDto } from './dto/update-posto.dto';

@Injectable()
export class PostosService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreatePostoDto) {
    return this.prismaService.posto.create({ data });
  }

  findAll() {
    return this.prismaService.posto.findMany({
      include: {
        servidores: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.posto.findUnique({
      where: { id },
      include: {
        servidores: true,
      },
    });
  }

  async findByTipoPosto(tipoPosto: TipoPosto) {
    const posto: any = await this.prismaService.posto.findMany({
      where: { tipoPosto },
      include: {
        servidores: true,
      },
    });

    const postoComCoordenadores = await posto.map((posto) => {
      const coordenador = posto.servidores[0]?.nome;
      const newobj = { ...posto, coordenador };
      return newobj;
    });

    return postoComCoordenadores;
  }

  update(id: string, updatePostoDto: UpdatePostoDto) {
    return this.prismaService.posto.update({
      where: { id },
      data: { ...updatePostoDto },
      include: {
        servidores: true,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.posto.delete({ where: { id } });
  }
}
