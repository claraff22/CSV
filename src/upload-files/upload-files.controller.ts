import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadFilesService } from './upload-files.service';

@Controller('upload-files')
export class UploadFilesController {
    constructor(private readonly uploadFilesService: UploadFilesService) {}  
    
    @Get('server')
    getServer() {
        return this.uploadFilesService.getServer();
    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file)
        return this.uploadFilesService.uploadFile()
    }
}
