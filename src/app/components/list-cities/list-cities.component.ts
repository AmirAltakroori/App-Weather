import { environment } from 'src/environments/environment.prod';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data.service';

@Component({
  selector: 'list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss']
})
export class ListCitiesComponent implements OnInit {

  @Output() listIsHidden = new EventEmitter();
  citiesList;
  lat;
  lon;
  weather;
  cityName: string;
  closeIcon;
  filterCity;

  constructor(private weatherDataService: WeatherDataService) { }
  ngOnInit() {
    this.getLocation();
    this.closeIcon = environment.closeIcon;
  }

  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.getNearesCities(this.lat, this.lon);

        let searchPara = {
          lat: this.lat,
          lon: this.lon
        }
    
        this.weatherDataService.getClimateData("weather", searchPara).subscribe(data => {
          this.weather = data;
        });
      })
    }    
  }

  getNearesCities(lat, lon){

    let searchPara = {
      lat: lat,
      lon: lon,
      cnt: 20
    }

    this.weatherDataService.getClimateData("find", searchPara).subscribe(data => {
      this.citiesList = data;
      this.citiesList = this.citiesList.list;
    });
  }

  closeList(status){
    this.listIsHidden.emit(status);
  }
}
