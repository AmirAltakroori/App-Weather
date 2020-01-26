import { Router } from '@angular/router';
import { StorageService } from './../../services/storage.service';
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
  weather: WeatherComponent;
  imgSearch;
  showCitiesList;
  nextDaysWeather: WeatherComponent[];
  citiesList: any;

  constructor(
    private router: Router,
    private weatherDataService: WeatherDataService,
    private climateConvarterService: ClimateConvarterService,
    private storage: StorageService,
  ) { }

  ngOnInit() {
    this.fillDataPage();
    this.imgSearch = environment.searchIcon;
    this.showCitiesList = false;
  }

  /**
   * void function that retrieve data if it was saved on service storage
   * otherwise it call a function that find the current location and generate data weather depands on tham
   */
  fillDataPage() {

    if (!this.storage.weathersData) {

      this.nextDaysWeather = [];
      this.getCurrentLocationWithData();

    } else {

      try {
        [this.weather, ...this.nextDaysWeather] = this.storage.weathersData;
        this.citiesList = this.storage.citiesList;
      } catch (error) {
        console.log(error);
      }

    }

  }

  /**
   * Void function that find lat and lot coordination and call getPageDataWeather function
   * to generate page data
   */
  getCurrentLocationWithData() {

    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        let lat = success.coords.latitude;
        let lon = success.coords.longitude;
        this.getPageDataWeather(lat, lon);
      })
    }

  }

  /**
   * Void function that construct search parameters depends on coordination
   * and call getCurrentDataWeather, getNextDaysWeather and getNearestCities function
   * to generate page data
   * 
   * @param byLat number descripes lat coordination
   * @param byLon number descripes lon coordination
   */
  getPageDataWeather(byLat, byLon) {

    let searchPara = {
      lat: byLat,
      lon: byLon,
    }

    this.getCurrentDataWeather(searchPara);
    this.getNextDaysWeather(searchPara);
    this.getNearestCities(searchPara);

  }

  /**
   * Void function that asks for data from weather service depands on search parameters
   * to get current data weather
   * 
   * @param searchPara object that contain the parameters that needed to search dapands on it
   */
  getCurrentDataWeather(searchPara) {

    searchPara = { ...searchPara, units: `metric` };

    this.weatherDataService.getClimateData("weather", searchPara).subscribe(data => {
      this.weather = this.climateConvarterService.fillClimateData("weather", data);
    });

  }

  /**
   * Void function that asks for data from weather service depands on search parameters
   * to get next days forecast
   *  
   * @param searchPara object that contain the parameters that needed to search dapands on it
   */
  getNextDaysWeather(searchPara) {

    searchPara = { ...searchPara, units: `metric` };
    this.nextDaysWeather = [];

    //get forecast list from weather service and pick {$environment.nextDaysForecastHomePage} differnet forecast days 
    this.weatherDataService.getClimateData("forecast", searchPara).subscribe(forecastList => {
      try {
        let start = new Date(forecastList.list[0].dt_txt).getDate();
        forecastList.list.forEach(element => {
          let forecast: WeatherComponent = this.climateConvarterService.fillClimateData("weather", element);
          if (this.nextDaysWeather.length < environment.nextDaysForecastHomePage && start != new Date(element.dt_txt).getDate()) {
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

  /**
   * Void function that asks for data from weather service depands on search parameters
   * to get list of nearest cities
   * 
   * @param searchPara object that contain the parameters that needed to search dapands on it 
   */
  getNearestCities(searchPara) {

    searchPara = { ...searchPara, cnt: 50 };

    this.weatherDataService.getClimateData("find", searchPara).subscribe(data => {
      this.citiesList = data;
      this.citiesList = this.citiesList.list;
    });

  }

  /**
   * Void function that recives city data object and fill data depands on coordinats
   * 
   * @param cityData city object from find weather's service 
   */
  changeCurrentCity(cityData: any) {

    let lat = cityData.coord.lat;
    let lon = cityData.coord.lon;
    this.getPageDataWeather(lat, lon);

  }

  /**
   * Void function that render forecast details page by specific id
   * 
   * @param id number that store weather id
   */
  showWeatherDetails(id: number) {

    this.storage.weathersData = [this.weather, ...this.nextDaysWeather]
    this.storage.citiesList = this.citiesList;
    this.router.navigate([`/forecast-details`, id]);

  }

  /**
   * Void function that shows cities list component
   */
  showCitiesSearch() {
    this.showCitiesList = true;
  }

  /**
   * Void function that shows cities list component
   */
  closeCitiesList() {
    this.showCitiesList = false;
  }

}
