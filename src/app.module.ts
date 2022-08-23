import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateFolderController } from './create-folder/create-folder.controller';
import { CreateFolderService } from './create-folder/create-folder.service';
import { CreateFolderModule } from './create-folder/create-folder.module';
import { GetDatasModule } from './get-datas/get-datas.module';
import { UploadFilesController } from './upload-files/upload-files.controller';
import { UploadFilesService } from './upload-files/upload-files.service';
import { UploadFilesModule } from './upload-files/upload-files.module';

@Module({
  imports: [CreateFolderModule, GetDatasModule, UploadFilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
