import { Component, OnInit, AfterContentInit } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data.service';
import { ForecastDataService } from 'src/app/services/forecast-data.service';

@Component({
  selector: 'today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  lat;
  lon;
  weather;
  foreCast;
  listForecastDays;
  mainImg;
  nextFourDays;

  constructor(private weatherDataService: WeatherDataService, private forecastDataService: ForecastDataService) { }

  ngOnInit() {

    this.getLocationWithDataWeather();
    this.getforecastDataByCity();
    let t = new Date();

  }

  gg() {
    return "http://openweathermap.org/img/wn/" + ".png";
    //    return "http://openweathermap.org/img/wn/" +  this.weather.weather[0].icon + ".png";

  }

  getLocationWithDataWeather() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherDataService.getDayWeatherDataByCoordinates(this.lat, this.lon).subscribe(data => {
          this.weather = data;
          console.log(this.weather);
        });
      })
    }
  }

  getforecastDataByCity() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherDataService.getDayWeatherDataByCoordinates(this.lat, this.lon).subscribe(data => {
          this.weather = data;
          this.forecastDataService.getDataByCityName(this.weather.name).subscribe(data => {
            this.foreCast = data;
            console.log(this.foreCast);

          })
        });
      })
    }
  }

  getNextFoutDays() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.weatherDataService.getDayWeatherDataByCoordinates(this.lat, this.lon).subscribe(data => {
          this.weather = data;
          this.forecastDataService.getDataByCityName(this.weather.name).subscribe(data => {
            this.listForecastDays = data;
          })
        });
      })
    }
  }

}
