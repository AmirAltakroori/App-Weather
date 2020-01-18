import { WeatherDataService } from 'src/app/services/weather-data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'next-days',
  templateUrl: './next-days.component.html',
  styleUrls: ['./next-days.component.scss']
})
export class NextDayComponent implements OnInit {

  @Input() city: string;
  @Input() dayPhase: number;
  dayForecast;
  forecastList;
  ourDay;

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit() {
    this.getDayForecast();
  }

  getDayForecast(){

    let searchPara = {
      q: this.city
    }
    
    this.weatherDataService.getClimateData("forecast", searchPara).subscribe(data => {
      this.forecastList = data;
      
      let start = new Date(this.forecastList.list[0].dt_txt).getHours();

      let j = 0;
      this.forecastList.list.forEach(element => {
        if (start == new Date(element.dt_txt).getHours())
        {
          if (j == this.dayPhase){
            this.dayForecast = element;
            this.ourDay = this.getNameOfDay(this.dayForecast.dt_txt);
          }
          j = j + 1;
        }
      });
    })
  }

  getNameOfDay(date){
    let weak = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
    let idx  = new Date(date).getDay();
    return weak[idx];
  }
}

