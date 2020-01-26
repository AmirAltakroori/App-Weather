import { WeatherComponent } from 'src/app/components/weather/weather.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // All Wethers Data details in one page
  private _weathersData: WeatherComponent[];

  // Cities list name of one page
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
