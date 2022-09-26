import { Module } from '@nestjs/common';
import { CreateFolderModule } from './create-folder/create-folder.module';
import { GetDatasModule } from './get-datas/get-datas.module';
import { UploadFilesModule } from './upload-files/upload-files.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [CreateFolderModule, GetDatasModule, UploadFilesModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
