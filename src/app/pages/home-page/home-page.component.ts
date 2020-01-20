import { ClimateConvarterService } from './../../services/climate-convarter.service';
import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { WeatherComponent } from 'src/app/components/weather/weather.component';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  lat;
  lon;
  weather: WeatherComponent;
  imgSearch;
  showCitiesList;
  nextDaysWeather: WeatherComponent[];
  citiesList: any;

  constructor(private weatherDataService: WeatherDataService,
    private climateConvarterService: ClimateConvarterService) { }

  ngOnInit() {
    this.nextDaysWeather = [];
    this.getLocationWithDataWeather();
    this.imgSearch = environment.searchIcon;
    this.showCitiesList = false;
  }

  getLocationWithDataWeather() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        let searchPara = {
          lat: this.lat,
          lon: this.lon,
          units: `metric`
        }

        this.weatherDataService.getClimateData("weather", searchPara).subscribe(data => {
          this.weather = this.climateConvarterService.fillClimateData("weather", data);
        });
        this.getNextDaysWeather();
        this.getNearesCities();
      })
    }

  }

  getNextDaysWeather() {

    let searchPara = {
      lat: this.lat,
      lon: this.lon,
      units: `metric`
    }

    this.weatherDataService.getClimateData("forecast", searchPara).subscribe(data => {

      let forecastList: any = data;

      try {

        let start = new Date(forecastList.list[0].dt_txt).getDate();

        forecastList.list.forEach(element => {

          let forecast: WeatherComponent = this.climateConvarterService.fillClimateData("weather", element);

          if (this.nextDaysWeather.length < 4 && start != new Date(element.dt_txt).getDate()) {
            start = new Date(element.dt_txt).getDate();
            forecast.date = element.dt_txt;
            this.nextDaysWeather.push(forecast);

          }

        });

      } catch (error) {
        console.log(error);
      }

    })

  }

  getNearesCities(){

    let searchPara = {
      lat: this.lat,
      lon: this.lon,
      cnt: 20
    }

    this.weatherDataService.getClimateData("find", searchPara).subscribe(data => {
      this.citiesList = data;
      this.citiesList = this.citiesList.list;
    });

  }

  changeCurrentCity(city: string){
    
  }
 

  showCitiesSearch() {
    this.showCitiesList = true;
  }

  closeCitiesList() {
    this.showCitiesList = false;
  }

}
