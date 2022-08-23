import { Injectable } from '@nestjs/common';
import { Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import fetch from 'cross-fetch';

@Injectable()
export class AppService {

  async getServer(){
    const response = await fetch ('https://api.gofile.io/getServer')
    const server = await response.json()
    
    return server
  }

}

// readonly job = new CronJob('******',);
