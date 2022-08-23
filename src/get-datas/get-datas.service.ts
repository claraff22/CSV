import { Injectable } from '@nestjs/common';
import fetch from 'cross-fetch';
import { writeFile } from 'fs';
import { Parser } from 'json2csv';


@Injectable()
export class GetDatasService {
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
}
