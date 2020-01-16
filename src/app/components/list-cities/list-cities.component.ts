import { CitiesDataService } from './../../services/cities-data.service';
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

  constructor(private weatherDataService: WeatherDataService, private citiesDataService: CitiesDataService) { }

  ngOnInit() {
    this.getLocation();
    this.getNearesCities();
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

  getNearesCities(){
    this.citiesDataService.getCitiesList(31.527531, 35.101830, 20).subscribe(data => {
      this.citiesList = data;
      this.citiesList = this.citiesList.list;
    });
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
