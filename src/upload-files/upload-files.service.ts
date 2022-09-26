import { Injectable } from '@nestjs/common';
import { MulterModule, MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import * as FormData from 'form-data';
import { appendFile, createReadStream, open, readFile, readFileSync } from 'fs';
import { diskStorage } from 'multer';
import { setFlagsFromString } from 'v8';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';
//import {file } from

@Injectable()
export class UploadFilesService {
  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {}

    async getServer(): Promise<Observable<string>> {
        const response = await this.httpService.axiosRef.get('https://api.gofile.io/getServer')
        const getserver = response.data.data.server
        console.log(getserver)
        return getserver

    }

    async uploadFileBU(): Promise<Observable<any>>{
      const server = await this.getServer()
      const url = `https://${server}.gofile.io/uploadFile`
      console.log(server, url)

      const date = new Date();
      const today = date.toLocaleDateString();

      const fileCSV = readFileSync('./src/csvFiles/braAndUsaFile.csv', 'utf-8')
      const fileName = "BRAandUSA"
      const token = this.configService.get('TOKEN')
      const folderId = this.configService.get('GO_FILE_FOLDER_ID_BU')

      const form = new FormData()
      form.append('file', fileCSV, fileName)
      form.append('token', token)
      form.append('folderId', folderId)

      console.log(form)

      return this.httpService.post(url, form, { headers: {'Content-Type': 'multipart/form-data'}}).pipe(map(response => response.data))
    }

    async uploadFileRC(): Promise<Observable<any>>{
      const server = await this.getServer()
      const url = `https://${server}.gofile.io/uploadFile`
      console.log(server, url)

      const fileCSV = readFileSync('./src/csvFiles/rusAndChnFile.csv', 'utf-8')
      const token = this.configService.get('TOKEN')
      const folderId = this.configService.get('GO_FILE_FOLDER_ID_RC')

  
      const form = new FormData()
      form.append('file', fileCSV, "RUSandCHN")
      form.append('token', token)
      form.append('folderId', folderId)

      console.log(form)

      return this.httpService.post(url, form, { headers: {'Content-Type': 'multipart/form-data'}}).pipe(map(response => response.data))
    }
    
}
