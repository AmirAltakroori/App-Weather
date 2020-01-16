import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesDataService {
  url = "http://api.openweathermap.org/data/2.5/find?"
  apiKey = "50f4c7abf4138d8dd08fb922f1d2984c";

  constructor(private http: HttpClient) { }

  getCitiesList(lat, lon, count){

    let params = new HttpParams()
    .set('lat', lat).set("lon", lon)
   .set('cnt', count)
    .set('appid', this.apiKey);

    return this.http.get(this.url, { params });
  }

}
