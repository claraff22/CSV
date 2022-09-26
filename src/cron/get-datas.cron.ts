import { Injectable } from "@nestjs/common";
import { Cron} from "@nestjs/schedule";
import { GetDatasService } from "src/get-datas/get-datas.service";


@Injectable()
export class getDatasCron{
    constructor(private readonly getDatasService: GetDatasService){}

    @Cron('34 23 * * *')
    async handlerDatas(){
        const getDatasBU = await this.getDatasService.getDatasBU()
        const getDatasRC = await this.getDatasService.getDatasRC()
        console.log("created datas successfully")
        return null
    }
}