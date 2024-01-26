import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config'
import { enviromets } from '../enviroments'
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath : enviromets[process.env.NODE_ENV] || '.env',
      isGlobal: true,
    }),
    ColaboradorModule, 
    DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
