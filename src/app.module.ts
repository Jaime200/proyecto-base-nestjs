import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ColaboradorModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
