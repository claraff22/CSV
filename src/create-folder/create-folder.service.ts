import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable, Req } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Content, createFolder } from 'src/Interface/create-folder.interface';

@Injectable()
export class CreateFolderService {
    constructor(private readonly httpService: HttpService) {}

    async getContent(): Promise<Observable<any>> {

      const url = 'https://api.gofile.io/getContent/b8ae8c4e-a9d9-4c60-a214-7291470426dd'

      return this.httpService.get(url).pipe(map(response => response.data))
    }

    async createFolder(data: createFolder): Promise<Observable<any>> {
      const url = 'https://api.gofile.io/createFolder'

      return this.httpService.put(url, data).pipe(map(response => response.data))

    }
}
//id: b8ae8c4e-a9d9-4c60-a214-7291470426dd
//nome da pasta
//token:  vV4W7Pou6bzrLjqFupGrLnVuSwizBPaE
    

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
        } 
        
      const init = {
          headers : {    
            Authorization : 'Bearer token vV4W7Pou6bzrLjqFupGrLnVuSwizBPaE'
          }
      }  
      */