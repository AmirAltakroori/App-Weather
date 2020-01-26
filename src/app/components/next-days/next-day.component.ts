import { WeatherComponent } from './../weather/weather.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'next-days',
  templateUrl: './next-days.component.html',
  styleUrls: ['./next-days.component.scss']
})
export class NextDayComponent implements OnInit {

  @Input() dayWeather: WeatherComponent;
  ourDay: string; //day name

  constructor() { }

  ngOnInit() {
    this.ourDay = this.getNameOfDay(this.dayWeather.date);
  }

  /**
   * function that recive day order and return name of day
   * 
   * @param date: number, point on day of weak
   * 
   * @returns: string day's name
   */
  getNameOfDay(date): string{
    let weak = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
    let idx  = new Date(date).getDay();
    return weak[idx];
  }

}

