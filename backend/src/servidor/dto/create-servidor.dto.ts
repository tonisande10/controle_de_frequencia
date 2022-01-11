import { Prisma, TipoServidor } from '@prisma/client';

export class CreateServidorDto implements Prisma.ServidorCreateInput {
  id?: string;
  nome: string;
  telefone: string;
  matricula: string;
  rg: string;
  endereco: string;
  cargo: string;
  data_de_nascimento: string;
  tipoDoServidor?: TipoServidor;
  frequencia?: Prisma.FrequenciaCreateNestedManyWithoutServidorInput;
  Posto?: Prisma.PostoCreateNestedManyWithoutServidoresInput;

}
