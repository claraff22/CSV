import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { GetServerService } from './get-server.service';

@Controller('get-server')
export class GetServerController {
    constructor(private readonly getServerService: GetServerService) {}

    @Get()
    getServer() {
        return this.getServerService.getServer();
    }

    @Post()
    uploadFile() {
        return this.getServerService.uploadFile();
    }
}

/*
@UseInterceptors(FileInterceptor('file'))
uploadFile(@UploadedFile() file: Express.Multer.File)
console.log(file)

 */