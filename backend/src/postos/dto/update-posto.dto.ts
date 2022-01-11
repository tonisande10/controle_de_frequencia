import { PartialType } from '@nestjs/mapped-types';
import { CreatePostoDto } from './create-posto.dto';

export class UpdatePostoDto extends PartialType(CreatePostoDto) {}
