import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UploadFilesController } from './upload-files.controller';
import { UploadFilesService } from './upload-files.service';

@Module({
    imports: [HttpModule],
    controllers: [UploadFilesController],
    providers: [UploadFilesService],
})
export class UploadFilesModule {}
