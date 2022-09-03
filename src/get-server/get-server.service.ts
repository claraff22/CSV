import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class GetServerService {
    constructor(private readonly httpService: HttpService) {}

    async getServer(): Promise<Observable<any>> {
        const response = this.httpService.get('https://api.gofile.io/getServer') 
        return response.pipe(map(response => response.data.data))
    }
}
