import { Injectable } from '@nestjs/common';
import { MulterModule, MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import * as FormData from 'form-data';
import { appendFile, createReadStream, open, readFile, readFileSync } from 'fs';
import { diskStorage } from 'multer';
import { setFlagsFromString } from 'v8';
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
    uploadFile() {

      const fileCSV = readFileSync('./src/csvFiles/braAndUsaFile.csv', 'utf-8')

      const form = new FormData()
      form.append('file', fileCSV)

      
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
