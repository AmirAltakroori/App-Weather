import { WeatherComponent } from './../weather/weather.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent {

  @Input() dayWeather: WeatherComponent;
  
  constructor() { }
}
