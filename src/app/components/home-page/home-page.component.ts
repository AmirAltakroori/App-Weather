import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { ForecastDataService } from 'src/app/services/forecast-data.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  lat;
  lon;
  weather;
  phaseList;

  constructor(private weatherDataService: WeatherDataService, private forecastDataService: ForecastDataService) { }

  ngOnInit() {
    this.phaseList = [1,2,3,4];
    this.getLocationWithDataWeather();    
  }

  getLocationWithDataWeather() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherDataService.getDayWeatherDataByCoordinates(this.lat, this.lon).subscribe(data => {
          this.weather = data;
        });
      })
    }
  }

}
