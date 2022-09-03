import { Injectable } from '@nestjs/common';
import { MulterModule, MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import  FormData from 'form-data';
import { diskStorage } from 'multer';
import { fileURLToPath } from 'url';

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
    uploadFile(){
      const form = new FormData()
      form.append('file', {filepath: './src/csvFiles/braAndUsaFile.csv'})

      console.log(form)
    }
}

/* 
file:
token: vV4W7Pou6bzrLjqFupGrLnVuSwizBPaE
folderId: (BR) 906fc3a2-eeed-44f5-b11d-a4d8ce3d0f80
folderId: (RUS) e3778858-dbed-4536-a9a8-273d03a3f76f
url: https://{server}.gofile.io/uploadFile
*/
