import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastDataService {
  url = "http://api.openweathermap.org/data/2.5/forecast?"
  apiKey = "50f4c7abf4138d8dd08fb922f1d2984c";

  constructor(private http: HttpClient) { }

  getDataByCityName(city) {
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', this.apiKey);
    return this.http.get(this.url, { params });
  }

  getFourDays(city){
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', this.apiKey);

      return [this.http.get(this.url, { params })[10],
      this.http.get(this.url, { params })[18],
      this.http.get(this.url, { params })[27],
      this.http.get(this.url, { params })[35]];
  }
}






