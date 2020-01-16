import { Component, OnInit, Input } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data.service';
import { ForecastDataService } from 'src/app/services/forecast-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  @Input() city: string;
  weather;
  forecast;

  ngOnInit() {
    this.getWeatherDataByCity();
    this.getForecastDataByCity();
  }

  constructor(private weatherDataService: WeatherDataService, private forecastDataService: ForecastDataService, private router: Router) { };

  getWeatherDataByCity() {
    this.weatherDataService.getDayWeatherDataByCityName(this.city).subscribe(data => {
      this.weather = data;
    })
  }

  getForecastDataByCity(){
    this.forecast.getDayWeatherDataByCityName(this.city).subscribe(data => {
      this.forecast = data;
    })
  }

  onSelect(id){
    this.router.navigate(['components/forecast-details/',id])
  }


}
