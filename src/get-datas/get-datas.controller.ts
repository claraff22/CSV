import { Controller, Get } from '@nestjs/common';
import { GetDatasService } from './get-datas.service';

@Controller('get-datas')
export class GetDatasController {
    constructor(private readonly getDatasService: GetDatasService) {}

    @Get('BRAandUSA')
    getDatasBU() {
    return this.getDatasService.getDatasBU();
    } 

    @Get('RUSandCHN')
    getDatasRC() {
        return this.getDatasService.getDatasRC();
    }
}
