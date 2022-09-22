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

export class MulterConfigService implements MulterOptionsFactory {
    createMulterOptions(): MulterModuleOptions {
      return {
        storage: diskStorage({
            destination: './filetest',
            /*filename(req, file, cb){
              const date = new Date();
              const today = date.toLocaleDateString();
              const filename = file.originalname
              console.log(filename)
              return cb(null, today +'-'+ filename)
            }*/
          },
      ),
      };
    }
  }
export class UploadFilesService {
  constructor(private readonly httpService: HttpService) {}

  async getServer(): Promise<Observable<any>> {
    const response = await this.httpService.axiosRef.get('https://api.gofile.io/getServer')
    const server = response.data.data.server
    console.log(server)
    return server
  }

  uploadFile() {

    /*const fileCSV = readFileSync('./src/csvFiles/braAndUsaFile.csv', 'utf-8')
    const server = this.getServer

    console.log(server)
    
    const form = new FormData()
    form.append('file', fileCSV)
    //form.append('token', "vV4W7Pou6bzrLjqFupGrLnVuSwizBPaE")
    //form.append('folderId', "906fc3a2-eeed-44f5-b11d-a4d8ce3d0f80")
    //form.append('',)
    */
    }
}

/* 
file:
token: vV4W7Pou6bzrLjqFupGrLnVuSwizBPaE
folderId: (BR) 906fc3a2-eeed-44f5-b11d-a4d8ce3d0f80
folderId: (RUS) e3778858-dbed-4536-a9a8-273d03a3f76f
url: https://{server}.gofile.io/uploadFile

 const form = new FormData()
      form.append('file', "string")

      console.log(form)
*/
