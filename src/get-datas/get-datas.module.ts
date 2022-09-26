import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { GetDatasService } from './get-datas.service'
import { getDatasCron } from 'src/cron/get-datas.cron';

@Module({
    imports: [HttpModule],
    controllers: [],
    providers: [GetDatasService, getDatasCron],
})
export class GetDatasModule {}
