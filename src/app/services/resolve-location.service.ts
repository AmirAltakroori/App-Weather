import { WeatherDataService } from './weather-data.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolveLocationService implements Resolve<any>{

  resolve() {
   return this.weatherDataService.localWeather()
  }

  constructor(private weatherDataService: WeatherDataService) { }
}
