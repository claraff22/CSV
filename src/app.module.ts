import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateFolderModule } from './create-folder/create-folder.module';
import { GetDatasModule } from './get-datas/get-datas.module';
import { UploadFilesModule } from './upload-files/upload-files.module';
import { HttpModule } from '@nestjs/axios';
import { GetServerModule } from './get-server/get-server.module';

@Module({
  imports: [CreateFolderModule, GetDatasModule, UploadFilesModule, HttpModule, GetServerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
