import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { HttpModule, HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
const API_KEY = '123456'
const API_KEY_PROD = '123456_PROD'
@Module({
  imports: [HttpModule, ColaboradorModule],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: 'API_KEY',
    useValue : process.env.NODE_ENV == 'prod'? API_KEY_PROD : API_KEY
  },
  {
    provide : 'TASKS',
    useFactory : async (http: HttpService) => {
      const request =  http.get('https://jsonplaceholder.typicode.com/todos');
      const tasks = await lastValueFrom(request);
      return tasks.data
    },
    inject: [HttpService]
  },
],
})
export class AppModule {}
