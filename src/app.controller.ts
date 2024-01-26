import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  constructor(
    private readonly appService: AppService,
    
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getTasks')
  getTasks(): any[] {
    return this.appService.getTasks();
  }
}
