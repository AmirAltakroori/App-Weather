import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  url = environment.weatherURL;
  apiKey = environment.weatherAPI;

  constructor(private http: HttpClient) { }

  /**
   * 
   * function that recive the query string from and object parameters from the pages
   * then goes to {$url} and bring data
   * 
   * @param searchBy string, find for cities, weather for weather data and forecast for forecast list data

   * @param recivedPram object of parameters 
   */
  getClimateData(searchBy: string, recivedPram: any): any {
    let ourUrl = this.url + searchBy + `?`;

    let params = new HttpParams();
    const keys = Object.keys(recivedPram);

    keys.forEach(key => {
      params = params.append(key, recivedPram[key])
    });

    params = params.append('appid', environment.weatherAPI)

    return this.http.get(ourUrl, { params });
  }

}
