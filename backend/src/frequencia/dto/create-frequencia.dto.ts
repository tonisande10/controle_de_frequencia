import { Prisma } from '@prisma/client';

export class CreateFrequenciaDto implements Prisma.FrequenciaCreateInput {
  periodo: string;
  status: string;
  observacao: string;
  Servidor?: Prisma.ServidorCreateNestedOneWithoutFrequenciaInput;
}
