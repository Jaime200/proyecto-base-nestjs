import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config'
import config from '../config'
@Injectable()
export class AppService {
  v_tasks: any[];
  apikey: string;
  

  constructor(
    @Inject('TASKS')  v_tasks: any[],
    @Inject('API_KEY')  apikey: string,
    
    @Inject(config.KEY) private configService : ConfigType<typeof config>
  ){
    this.v_tasks = v_tasks;
    this.apikey = apikey
  }
  getHello(): string {
    return `Hello World! ${this.apikey} desde config ${this.configService.database.name}`;
  }

  getTasks():any[] {
    return this.v_tasks;
  }
}
