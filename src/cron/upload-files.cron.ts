import { Injectable } from "@nestjs/common"
import { Cron} from "@nestjs/schedule";
import { UploadFilesService } from "src/upload-files/upload-files.service"

@Injectable()
export class uploadFiles{
    constructor(private readonly uploadFilesService: UploadFilesService){}

    @Cron('53 23 * * *')
    async handleUpload(){
        const uploadFilesBU = await this.uploadFilesService.uploadFileBU()
        const uploadFilesRC = await this.uploadFilesService.uploadFileRC()
        console.log("Files uploaded sucessfully")
    }

    @Cron('55 23 * * *')
    async handleRemove(){
        const removeFiles = await this.uploadFilesService.removeFiles()
        console.log("Files removed sucessfully")
    }

}

