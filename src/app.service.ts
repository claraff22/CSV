import { Injectable } from '@nestjs/common';
import { Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import fetch from 'cross-fetch';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getServer(): Promise<Observable<any>> {
   return this.httpService.get('https://api.gofile.io/getServer').pipe(map(response => response.data))
  }

}

// readonly job = new CronJob('******',);
