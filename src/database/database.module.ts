import { Global, Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios'
import { Client } from 'pg'
import { ConfigType } from '@nestjs/config'
import config from '../../config'
import { DataSource } from 'typeorm';


const API_KEY = '123456'
const API_KEY_PROD = '123456_PROD'




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
            useFactory : async (configService : ConfigType<typeof config> ) => {

              
              const { user, host, name, port, pwd } = configService.database
              
              const client =    new Client({
                  user: user,
                  host: host,
                  database: name,
                  password : pwd,
                  port: port
                });
                client.connect()
                return client
            },
            
            inject: [config.KEY]
        },
        {
          provide: 'context',
          useFactory : async (configService : ConfigType<typeof config>) =>{
            const { user, host, name, port, pwd } = configService.database
            const dataSource = new DataSource({
                type: 'postgres',
                host: host,
                database: name,
                password : pwd,
                username: user,
                port: port,
                entities: [
                  __dirname + '/../**/*.entity{.ts,.js}',
              ],
              synchronize: true,
              })

              return dataSource.initialize();
          },
          inject: [config.KEY]
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
    exports : ['API_KEY', 'PG', 'TASKS','context']
})
export class DatabaseModule {}
