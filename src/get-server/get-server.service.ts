import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as FormData from 'form-data';
import { readFileSync } from 'fs';
import { lastValueFrom, map, Observable } from 'rxjs';

@Injectable()
export class GetServerService {
    constructor(private readonly httpService: HttpService) {}

    async getServer(): Promise<Observable<string>> {
        const response = await this.httpService.axiosRef.get('https://api.gofile.io/getServer')
        const getserver = response.data.data.server
        console.log(getserver)
        return getserver

    }

    async uploadFile(): Promise<Observable<object>>{
        const server = await this.getServer()
        const url = `https://${server}.gofile.io/uploadFile`
        console.log(server, url)

        const fileCSV = readFileSync('./src/csvFiles/braAndUsaFile.csv', 'utf-8')
    
        const form = new FormData()
        form.append('file', fileCSV)
        form.append('token', "vV4W7Pou6bzrLjqFupGrLnVuSwizBPaE")
        form.append('folderId', "906fc3a2-eeed-44f5-b11d-a4d8ce3d0f80")

        console.log(form)

        const response = this.httpService.post(url, form, { headers: {'Content-Type': 'multipart/form-data'}}).pipe(map(response => response.data))
        const data = await lastValueFrom(response)
        console.log(response, data)
        return data
    }
}

 /* const response = response.pipe(map(response => response.data.data))
 await lastValueFrom(this.httpService.post(url, form, init).pipe(map(response => response.data))) 
 */