import { Prisma, TipoPosto } from '@prisma/client';

export class CreatePostoDto implements Prisma.PostoCreateInput {
  id?: string;
  email: string;
  nome?: string;
  tipoPosto?: TipoPosto;
  servidores?: Prisma.ServidorCreateNestedManyWithoutPostoInput;
  profile?: Prisma.ProfileCreateNestedOneWithoutPostoInput;

}
