import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  v_tasks: any[];
  apikey: string;
  

  constructor(
    @Inject('TASKS')  v_tasks: any[],
    @Inject('API_KEY')  apikey: string
  ){
    this.v_tasks = v_tasks;
    this.apikey = apikey
  }
  getHello(): string {
    return 'Hello World! ' + this.apikey;
  }

  getTasks():any[] {
    return this.v_tasks;
  }
}
