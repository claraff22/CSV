import { Injectable } from '@nestjs/common';
import { MulterModule, MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import * as FormData from 'form-data';
import { appendFile, createReadStream, open, readFile, readFileSync } from 'fs';
import { diskStorage } from 'multer';
import { setFlagsFromString } from 'v8';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
//import {file } from

@Injectable()
export class UploadFilesService {
  constructor(private readonly httpService: HttpService) {}

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

      const fileCSV = readFileSync('./src/csvFiles/braAndUsaFile.csv', 'utf-8')
  
      const form = new FormData()
      form.append('file', fileCSV, "BRAandUSA")
      form.append('token', "vV4W7Pou6bzrLjqFupGrLnVuSwizBPaE")
      form.append('folderId', "69bd94c2-6033-494b-8b0c-5a75340ab646")

      console.log(form)

      return this.httpService.post(url, form, { headers: {'Content-Type': 'multipart/form-data'}}).pipe(map(response => response.data))
    }

    async uploadFileRC(): Promise<Observable<any>>{
      const server = await this.getServer()
      const url = `https://${server}.gofile.io/uploadFile`
      console.log(server, url)

      const fileCSV = readFileSync('./src/csvFiles/rusAndChnFile.csv', 'utf-8')
  
      const form = new FormData()
      form.append('file', fileCSV, "RUSandCHN")
      form.append('token', "vV4W7Pou6bzrLjqFupGrLnVuSwizBPaE")
      form.append('folderId', "41d72f19-cd24-4811-95b5-a88d2409aa30")

      console.log(form)

      return this.httpService.post(url, form, { headers: {'Content-Type': 'multipart/form-data'}}).pipe(map(response => response.data))
    }
    
}
