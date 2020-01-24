import { ClimateConvarterService } from './climate-convarter.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpClientJsonpModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { WeatherComponent } from '../components/weather/weather.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  url = environment.weatherURL;
  apiKey = environment.weatherAPI;
  private location;
  private weather: WeatherComponent = new WeatherComponent();

  constructor(private http: HttpClient, private climateConvarterService: ClimateConvarterService) { }

  /**
   * 
   * @param serchBy 
   * @param recivedPram 
   */
  getClimateData(serchBy: string, recivedPram: any): any {
    let ourUrl = this.url + serchBy + `?`;

    let params = new HttpParams();
    const keys = Object.keys(recivedPram);

    keys.forEach(key => {
      params = params.append(key, recivedPram[key])
    });

    params = params.append('appid', environment.weatherAPI)

    return this.http.get(ourUrl, { params });
  }

  // localWeather() {
  //   return new Promise((res, rej) => {
  //     navigator.geolocation.getCurrentPosition((pos) => {
  //       this.location = pos.coords;
  //       const newLat = this.location.latitude;
  //       const newLon = this.location.longtitude;

  //       let searchPara = {
  //         lat: newLat,
  //         lon: newLon,
  //         units: `metric`
  //       }

  //       this.getClimateData("weather", searchPara).map((response: Response) =>
  //         response.json()).toPromise().then(
  //           (data) => {
  //             this.weather = this.climateConvarterService.fillClimateData("weather", data);
  //             res(this.weather);
  //           }
  //         )
  //     })
  //   })
  // }
}
