import { environment } from 'src/environments/environment.prod';
import { WeatherComponent } from './../weather/weather.component';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'next-days',
  templateUrl: './next-days.component.html',
  styleUrls: ['./next-days.component.scss']
})
export class NextDayComponent implements OnInit {

  @Input() dayWeather: WeatherComponent;
  ourDay;
  imgUrl;

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit() {
    this.ourDay = this.getNameOfDay(this.dayWeather.date);
    this.imgUrl = environment.weatherIconUrl + this.dayWeather.icon ;
  }

  getNameOfDay(date){
    let weak = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
    let idx  = new Date(date).getDay();
    return weak[idx];
  }

  onSelect(id){
    
  }
}

