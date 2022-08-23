import { Injectable, Req } from '@nestjs/common';

@Injectable()
export class CreateFolderService {

    async createFolder(@Req() req: Request) {

        const folder = {
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
      
        //id: b8ae8c4e-a9d9-4c60-a214-7291470426dd
        //nome da pasta
        //token:  
    
    }
}
