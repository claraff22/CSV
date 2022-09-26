import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { writeFile } from 'fs';
import { Parser } from 'json2csv';

@Injectable()
export class GetDatasService {
  constructor(private readonly httpService: HttpService) {}

    async getDatasBU() {

      const response = await this.httpService.axiosRef.get('https://disease.sh/v3/covid-19/countries/brazil%2C%20usa')
      const data = response.data
      
      const date = new Date();
      const today = date.toLocaleDateString();
    
      const datas = data.map((item) => ({
          country: item.country,
          date: today,
          todayCases: item.todayCases,
          todayDeaths: item.todayDeaths,
          active: item.active,
          critical: item.critical
        })
      )
      
      const json2csvParser = new Parser();
      const csv = json2csvParser.parse(datas)
    
      writeFile('./src/csvFiles/braAndUsaFile.csv', csv, (err) => {
        if(err) {
          console.log(err)
        } else {
          console.log("File created successfully") 
        }
      })
  
      return data
    }
    
    async getDatasRC() {
      const response = await this.httpService.axiosRef.get('https://disease.sh/v3/covid-19/countries/russia%2C%20china')
      const data = response.data
        
      const date = new Date();
      const today = date.toLocaleDateString();
    
      const datas = data.map((item) => ({
          country: item.country,
          date: today,
          todayCases: item.todayCases,
          todayDeaths: item.todayDeaths,
          active: item.active,
          critical: item.critical
        })
      )
    
      const json2csvParser = new Parser();
      const csv = json2csvParser.parse(datas)
    
      writeFile('./src/csvFiles/rusAndChnFile.csv', csv, (err) => {
        if(err) throw err
        console.log("File created successfully") 
      })
    
      return data
    }
}
