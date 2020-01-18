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
  }

  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        let searchPara = {
          lat: this.lat,
          lon: this.lon
        }
    
        this.weatherDataService.getClimateData("weather", searchPara).subscribe(data => {
          this.weather = data;
        });
      })
    }
    
    this.getNearesCities();
  }

  getNearesCities(){

    let searchPara = {
      lat: this.lat,
      lon: this.lon
    }

    this.weatherDataService.getClimateData("find", searchPara).subscribe(data => {
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
