import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradorController } from './colaborador/colaborador.controller';
import { ColaboradorService } from './colaborador/Services/colaborador.service';

@Module({
  imports: [],
  controllers: [AppController, ColaboradorController],
  providers: [AppService, ColaboradorService],
})
export class AppModule {}
