import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastDataService {
  url = "http://api.openweathermap.org/data/2.5/forecast?";
  apiKey = "50f4c7abf4138d8dd08fb922f1d2984c";

  constructor(private http: HttpClient) { }

  /**
   * this function return forecast data based on spacified 
   * 
   * @param lat numaric parameter that spacify latitude
   * @param lon numaric parameter that spacify longtitude
   * @returns json data that contain forecast data
   */
  getDaysforecastDataByCoordinates(lat, lon){
    let params = new HttpParams()
    .set('lat', lat).set("lon", lon)
    .set('units', 'metric')
    .set('appid', this.apiKey);

    return this.http.get(this.url, { params });
  }

  getListDaysForecastByCoordinates(lat, lon){
    let listDays = [];
    let allForecastData = this.getDaysforecastDataByCoordinates(lat, lon);
    let currentDate = new Date();
    

  }
}



