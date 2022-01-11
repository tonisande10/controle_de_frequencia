import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostosService } from './postos.service';
import { CreatePostoDto } from './dto/create-posto.dto';
import { UpdatePostoDto } from './dto/update-posto.dto';
import { TipoPosto } from '@prisma/client';

@Controller('postos')
export class PostosController {
  constructor(private readonly postosService: PostosService) {}

  @Post()
  create(@Body() createPostoDto: CreatePostoDto) {
    return this.postosService.create(createPostoDto);
  }

  @Get()
  findAll() {
    return this.postosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postosService.findOne(id);
  }

  @Get('tipoposto/:tipoposto')
  findByName(@Param('tipoposto') tipoposto: TipoPosto) {
    return this.postosService.findByTipoPosto(tipoposto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostoDto: UpdatePostoDto) {
    return this.postosService.update(id, updatePostoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postosService.remove(id);
  }
}
