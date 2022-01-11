import { Module } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { ServidorController } from './servidor.controller';
import { ServidorService } from './servidor.service';

@Module({
  controllers: [ServidorController],
  providers: [ServidorService, PrismaService],
})
export class ServidorModule {}
