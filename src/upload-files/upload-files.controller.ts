import { Controller, Get, Post} from '@nestjs/common';
import { UploadFilesService } from './upload-files.service';

@Controller('upload-files')
export class UploadFilesController {
    constructor(private readonly uploadFilesService: UploadFilesService) {}  
    
    @Get('server')
    getServer() {
        return this.uploadFilesService.getServer();
    }

    @Post('BRAandUSA')
    uploadFileBU(){
        return this.uploadFilesService.uploadFileBU()
    }

    @Post('RUSandCHN')
    uploadFileRC(){
        return this.uploadFilesService.uploadFileRC()
    }
}
