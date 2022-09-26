import { Injectable } from "@nestjs/common";
import { Cron} from "@nestjs/schedule";
import { GetDatasService } from "src/get-datas/get-datas.service";


@Injectable()
export class getDatasCron{
    constructor(private readonly getDatasService: GetDatasService){}

    @Cron('51 23 * * *')
    async handleDatasBU(){
        const getDatasBU = await this.getDatasService.getDatasBU()
    }

    @Cron('10 51 23 * * *')
    async handleDatasRC(){
        const getDatasRC = await this.getDatasService.getDatasRC()
    }
}