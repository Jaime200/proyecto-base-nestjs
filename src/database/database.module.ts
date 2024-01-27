import { Global, Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
import { Client } from 'pg'

const API_KEY = '123456'
const API_KEY_PROD = '123456_PROD'


const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'nombasei',
  password : '123456',
  port: 5432
})

client.connect();

@Global()
@Module({
    imports: [HttpModule],
    providers: [
        {
            provide: 'API_KEY',
            useValue : process.env.NODE_ENV == 'prod'? API_KEY_PROD : API_KEY
        },
        {
            provide: 'PG',
            useValue : client
        },
          {
            provide : 'TASKS',
            useFactory : async (http: HttpService) => {
              //const request =  http.get('https://jsonplaceholder.typicode.com/todos');
              //const tasks = await lastValueFrom(request);
              return []
            },
            inject: [HttpService]
          },

    ],
    exports : ['API_KEY', 'PG', 'TASKS']
})
export class DatabaseModule {}
