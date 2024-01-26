import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
@Injectable()
export class AppService {
  v_tasks: any[];
  apikey: string;
  

  constructor(
    @Inject('TASKS')  v_tasks: any[],
    @Inject('API_KEY')  apikey: string,
    private configService: ConfigService
  ){
    this.v_tasks = v_tasks;
    this.apikey = apikey
  }
  getHello(): string {
    return `Hello World! ${this.apikey} desde config ${this.configService.get('DATABASE_NAME')}`;
  }

  getTasks():any[] {
    return this.v_tasks;
  }
}
