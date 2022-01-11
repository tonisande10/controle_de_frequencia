import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FrequenciaService } from './frequencia.service';
import { CreateFrequenciaDto } from './dto/create-frequencia.dto';
import { UpdateFrequenciaDto } from './dto/update-frequencia.dto';

@Controller('frequencia')
export class FrequenciaController {
  constructor(private readonly frequenciaService: FrequenciaService) {}

  @Post()
  create(@Body() createFrequenciaDto: CreateFrequenciaDto) {
    return this.frequenciaService.create(createFrequenciaDto);
  }

  @Get()
  findAll() {
    return this.frequenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.frequenciaService.findOne(id);
  }

  @Get('servidor/:id')
  findById(@Param('id') id: string) {
    return this.frequenciaService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateFrequenciaDto: UpdateFrequenciaDto,
  ) {
    return this.frequenciaService.update(id, updateFrequenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.frequenciaService.remove(id);
  }
}
