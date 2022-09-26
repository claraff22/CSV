import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { uploadFiles } from 'src/cron/upload-files.cron';
import { UploadFilesService } from './upload-files.service';

@Module({
    imports: [HttpModule, ConfigModule.forRoot({isGlobal: true})],
    controllers: [],
    providers: [UploadFilesService, uploadFiles],
})
export class UploadFilesModule {}
