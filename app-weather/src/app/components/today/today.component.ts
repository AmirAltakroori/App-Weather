import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data.service';

@Component({
  selector: 'today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  lat;
  lon;
  weather;

  listForecastDays: [];

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit() {

    this.getLocation();
    let t = new Date();
    
  }

  getLocation(){
    if ("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;      
      })
    }
  }

 setDayWeatherByCo(lat, lon){
      this.weatherDataService.getDayWeatherDataByCoordinates(this.lat, this.lon).subscribe(data=>{
          this.weather = data;
        });
  }

}
