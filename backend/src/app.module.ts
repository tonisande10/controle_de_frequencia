import { Module } from '@nestjs/common';
import { PostosModule } from './postos/postos.module';

import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ServidorModule } from './servidor/servidor.module';
import { FrequenciaModule } from './frequencia/frequencia.module';

@Module({
  imports: [
    PostosModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Buildar uma documentação em react no futuro.
    }),
    ServidorModule,
    FrequenciaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
