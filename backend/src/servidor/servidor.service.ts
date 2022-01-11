import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';


@Injectable()
export class ServidorService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreateServidorDto) {
    return this.prismaService.servidor.create({ data });
  }

  findAll() {
    return this.prismaService.servidor.findMany();
  }

  findFrequency() {
    return this.prismaService.servidor.findMany({
      include: {
        frequencia: true
      },
    })
  }

  findOne(id: string) {
    return this.prismaService.servidor.findUnique({
      where: { id },
      include: { frequencia: true },
    });
  }

  update(id: string, data: UpdateServidorDto) {
    return this.prismaService.servidor.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prismaService.servidor.delete({ where: { id } });
  }
}
