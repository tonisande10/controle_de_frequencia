import { Module } from '@nestjs/common';
import { PostosService } from './postos.service';
import { PostosController } from './postos.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PostosController],
  providers: [PostosService, PrismaService],
})
export class PostosModule {}
