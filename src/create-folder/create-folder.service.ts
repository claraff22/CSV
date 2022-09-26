import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { createFolder } from 'src/Interface/create-folder.interface';

@Injectable()
export class CreateFolderService {
    constructor(private readonly httpService: HttpService) {}

    async createFolder(data: createFolder): Promise<Observable<any>> {
      const url = 'https://api.gofile.io/createFolder'

      return this.httpService.put(url, data).pipe(map(response => response.data))

    }
}