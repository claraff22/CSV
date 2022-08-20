import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('BRAandUSA')
  getDatasBU() {
  return this.appService.getDatasBU();
  }

  @Get('RUSandCHN')
  getDatasRC() {
    return this.appService.getDatasRC();
  }

  @Get('server')
  getServer() {
    return this.appService.getServer();
  }
}
