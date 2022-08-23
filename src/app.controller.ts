import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('server')
  getServer() {
    return this.appService.getServer();
  }

}
