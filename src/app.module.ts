import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config'
import { enviromets } from '../enviroments'
import config from '../config'
import * as Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath : enviromets[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema : Joi.object({
        DATABASE_NAME : Joi.string().required(),
        DATABASE_PORT : Joi.number().required(),
        DATABASE_HOST : Joi.string().required(),
        DATABASE_USER : Joi.string().required(),
        API_KEY : Joi.string().required()
      })
    }),
    ColaboradorModule, 
    DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
