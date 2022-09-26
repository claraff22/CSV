import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GetDatasController } from './get-datas.controller'
import { GetDatasService } from './get-datas.service'
import { getDatasCron } from 'src/cron/get-datas.cron';

@Module({
    imports: [HttpModule],
    controllers: [GetDatasController],
    providers: [GetDatasService, getDatasCron],
})
export class GetDatasModule {}
