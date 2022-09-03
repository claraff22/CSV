import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UploadFilesService } from './upload-files.service';

@Controller('upload-files')
export class UploadFilesController {
    constructor(private readonly uploadFilesService: UploadFilesService) {}   

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file)
        return this.uploadFilesService.uploadFile()
    }
}
