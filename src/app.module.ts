import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradorController } from './colaborador/colaborador.controller';
import { ColaboradorService } from './colaborador/Services/colaborador.service';
import { ColaboradorModule } from './colaborador/colaborador.module';

@Module({
  imports: [ColaboradorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
