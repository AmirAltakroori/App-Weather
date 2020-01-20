import { WeatherDataService } from 'src/app/services/weather-data.service';
import { environment } from 'src/environments/environment.prod';
import { WeatherComponent } from './../weather/weather.component';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  @Input() dayWeather: WeatherComponent;
  
  constructor(private weatherDataService: WeatherDataService) { }
  
  ngOnInit() {
   
  }

  onSelect(){
    console.log(this.dayWeather.icon)
  }
}
