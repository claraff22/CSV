import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { stringify } from 'querystring';
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

  @Put(':id')
  createFolder(@Param('id') id: string, @Body() body) {
    return this.appService.createFolder(body, );
  }
}
