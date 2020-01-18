import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpClientJsonpModule } from '@angular/common/http';
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
   * @param serchBy 
   * @param recivedPram 
   */
  getClimateData(serchBy:string, recivedPram:any)
  {
    let ourUrl = this.url  + serchBy + `?`;

    let params = new HttpParams();

    params = params.append('units', 'metric');
    params = params.append('appid', environment.weatherAPI)

    const keys = Object.keys(recivedPram);

    keys.forEach(key => {
      params = params.append(key, recivedPram[key])
      console.log(key, "   ", recivedPram)
    });
    
    return this.http.get(ourUrl, { params });
  }
 
}
