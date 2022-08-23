import { HttpService } from '@nestjs/axios';
import { Injectable, Req } from '@nestjs/common';
import { Observable } from 'rxjs';
import { createFolder } from 'src/Interface/create-folder.interface';

@Injectable()
export class CreateFolderService {
    constructor(private readonly httpService: HttpService) {}

    async createFolder(data: createFolder): Promise<Observable<any>> {
        const url = 'https://api.gofile.io/createFolder'

        const init = {
            headers : {
                Authorization : 'Bearer token vV4W7Pou6bzrLjqFupGrLnVuSwizBPaE'
            }
        }

        const response = this.httpService.put(url, data, init)

        return response
    }
}
//id: b8ae8c4e-a9d9-4c60-a214-7291470426dd
//nome da pasta
//token:  
    

/* const folder = {
          parentFolderId: req.body,
          folderName: req.body,
          token: req.body
        }
        
        try {
          
          await fetch ('https://api.gofile.io/createFolder', {
            method: "PUT",
            body: JSON.stringify(folder),
            headers: {"Content-type": "apliccation/json", "host": "https://api.gofile.io/createFolder"}
          })
    
          console.log("Create folder successfully")
    
        } catch(error) {
          console.log(error)
        } */