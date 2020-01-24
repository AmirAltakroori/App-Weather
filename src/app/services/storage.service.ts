import { WeatherComponent } from 'src/app/components/weather/weather.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _weathersData: WeatherComponent[];
  private _citiesList: string[];
  
  constructor() { }
  
  public get weathersData(): WeatherComponent[] {
    return this._weathersData;
  }

  public set weathersData(value: WeatherComponent[]) {
    this._weathersData = value;
  }

  public get citiesList(): string[] {
    return this._citiesList;
  }

  public set citiesList(value: string[]) {
    this._citiesList = value;
  }

}
