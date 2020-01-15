import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data.service';

@Component({
  selector: 'list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss']
})
export class ListCitiesComponent implements OnInit {

  citiesList;
  lat;
  lon;
  weather;
  cityName: string;

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit() {
    this.getLocation();
    this.citiesList = [{name: 'a'},{name: 'c'},{name: 'b'},{name: 'aab'}];
  }

  getLocation() {
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

  search(){
    if (this.cityName ==""){
      this.ngOnInit();
    }
    this.citiesList = this.citiesList.filter(city=>{
      return city.name.toLowerCase().match(this.cityName.toLowerCase());
    });
  }
}
