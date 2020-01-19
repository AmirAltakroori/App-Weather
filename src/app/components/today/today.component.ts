import { environment } from 'src/environments/environment.prod';
import { WeatherComponent } from './../weather/weather.component';
import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements AfterContentInit {

  @Input() dayWeather: WeatherComponent;
  imgUrl;

  ngAfterContentInit() {
    this.imgUrl = environment.weatherIconUrl + this.dayWeather.icon ;
  }

  constructor( private router: Router) { };

  onSelect(id){
    this.router.navigate(['components/forecast-details/',id])
  }

}
