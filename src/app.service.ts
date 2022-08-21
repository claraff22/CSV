import { Injectable } from '@nestjs/common';
import { Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import fetch from 'cross-fetch';
import { Parser } from 'json2csv'
import { writeFile } from 'fs';
@Injectable()
export class AppService {
  async getDatasBU() {
    const response = await fetch ('https://disease.sh/v3/covid-19/countries/brazil%2C%20usa')
    const data = await response.json()

    const date = new Date();
    const today = date.toLocaleDateString();

    const datas = data.map((item) => ({
      country: item.country,
      date: today,
      todayCases: item.todayCases,
      todayDeaths: item.todayDeaths,
      active: item.active,
      critical: item.critical
    }))

    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(datas)

    writeFile('./src/csvFiles/braAndUsaFile.csv', csv, (err) => {
      if(err) {
        console.log(err)
      } else {
        console.log("File created successfully") 
      }
    })


    console.log(csv)
    return data
  }

  async getDatasRC() {
    const response = await fetch ('https://disease.sh/v3/covid-19/countries/russia%2C%20china')
    const data = await response.json()
    
    const date = new Date();
    const today = date.toLocaleDateString();

    const datas = data.map((item) => ({
      country: item.country,
      date: today,
      todayCases: item.todayCases,
      todayDeaths: item.todayDeaths,
      active: item.active,
      critical: item.critical
    }))

    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(datas)

    writeFile('./src/csvFiles/rusAndChnFile.csv', csv, (err) => {
      if(err) {
        console.log(err)
      } else {
        console.log("File created successfully") 
      }
    })

    console.log(csv)
    return data
  }

  async getServer(){
    const response = await fetch ('https://api.gofile.io/getServer')
    const server = await response.json()
    
    return server
  }

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

// readonly job = new CronJob('******',);
