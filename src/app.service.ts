import { Injectable } from '@nestjs/common';
import fetch from 'cross-fetch';

@Injectable()
export class AppService {
  async getDatasBU() {
    const response = await fetch ('https://disease.sh/v3/covid-19/countries/brazil%2C%20usa')
    const data = await response.json()
    return data
  }

  async getDatasRC() {
    const response = await fetch ('https://disease.sh/v3/covid-19/countries/russia%2C%20china')
    const data = await response.json()
    return data
  }
}
