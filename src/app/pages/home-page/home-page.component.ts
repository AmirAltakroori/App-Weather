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
    this.getCurrentLocationWithData();
    
    this.imgSearch = environment.searchIcon;
    this.showCitiesList = false;
  }

  getCurrentLocationWithData() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        this.getPageDataWeather(this.lat, this.lon);
      })
      
    }
  }

  getPageDataWeather(byLat, byLon) {

    let searchPara = {
      lat: byLat,
      lon: byLon,
    }

    this.getCurrentDataWeather(searchPara);
    this.getNextDaysWeather(searchPara);
    this.getNearesCities(searchPara);

  }

  getCurrentDataWeather(searchPara) {

    searchPara = { ...searchPara, units: `metric` };
    this.weatherDataService.getClimateData("weather", searchPara).subscribe(data => {
      this.weather = this.climateConvarterService.fillClimateData("weather", data);
    });

  }

  getNextDaysWeather(searchPara) {
    this.nextDaysWeather = [];
    searchPara = { ...searchPara, units: `metric` };

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

  getNearesCities(searchPara) {

    searchPara = { ...searchPara, cnt: 50 };

    this.weatherDataService.getClimateData("find", searchPara).subscribe(data => {
      this.citiesList = data;
      this.citiesList = this.citiesList.list;
    });

  }

  changeCurrentCity(cityData: any) {
    let lat = cityData.coord.lat;
    let lon = cityData.coord.lon;
    this.getPageDataWeather(lat, lon);

  }


  showCitiesSearch() {
    this.showCitiesList = true;
  }

  closeCitiesList() {
    this.showCitiesList = false;
  }

}
