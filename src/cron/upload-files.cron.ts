import { Injectable } from "@nestjs/common"
import { Cron} from "@nestjs/schedule";
import { UploadFilesService } from "src/upload-files/upload-files.service"

@Injectable()
export class uploadFiles{
    constructor(private readonly uploadFilesService: UploadFilesService){}

    @Cron('36 23 * * *')
    async handlerUpload(){
        const uploadFilesBU = await this.uploadFilesService.uploadFileBU()
        const uploadFilesRC = await this.uploadFilesService.uploadFileRC()
        console.log("Files uploaded sucessfully")
        return null
    }

}

