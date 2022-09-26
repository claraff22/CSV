import { Injectable } from '@nestjs/common';
import * as FormData from 'form-data';
import { readFileSync, unlink} from 'fs';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class UploadFilesService {
  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {}

    async getServer(): Promise<Observable<string>> {
      const response = await this.httpService.axiosRef.get('https://api.gofile.io/getServer')
      const getserver = response.data.data.server
      return getserver
    }

    async uploadFileBU(): Promise<Observable<any>>{
      const server = await this.getServer()
      const url = `https://${server}.gofile.io/uploadFile`

      const fileCSV = readFileSync('./src/csvFiles/braAndUsaFile.csv', 'utf-8')
      const fileName = "BRAandUSA"
      const token = this.configService.get('TOKEN')
      const folderId = this.configService.get('GO_FILE_FOLDER_ID_BU')

      const form = new FormData()
      form.append('file', fileCSV, fileName)
      form.append('token', token)
      form.append('folderId', folderId)

      const response = this.httpService.post(url, form, { headers: {'Content-Type': 'multipart/form-data'}}).pipe(map(response => response.data))

      unlink('./src/csvFiles/braAndUsaFile.csv', (err) =>{
        if (err) throw err
        console.log("File deleted successfully")
      })

      return response
    }

    async uploadFileRC(): Promise<Observable<any>>{
      const server = await this.getServer()
      const url = `https://${server}.gofile.io/uploadFile`

      const fileCSV = readFileSync('./src/csvFiles/rusAndChnFile.csv', 'utf-8')
      const fileName = "RUSandCHN"
      const token = this.configService.get('TOKEN')
      const folderId = this.configService.get('GO_FILE_FOLDER_ID_RC')

      const form = new FormData()
      form.append('file', fileCSV, fileName)
      form.append('token', token)
      form.append('folderId', folderId)

      const response = this.httpService.post(url, form, { headers: {'Content-Type': 'multipart/form-data'}}).pipe(map(response => response.data))

      unlink('./src/csvFiles/rusAndChnFile.csv', (err) =>{
        if (err) throw err
        console.log("File deleted successfully")
      })

      return response
    }
    
}
