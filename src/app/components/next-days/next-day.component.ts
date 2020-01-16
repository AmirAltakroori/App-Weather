import { ForecastDataService } from './../../services/forecast-data.service';
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
  ourDate;

  constructor(private forecastDataService: ForecastDataService) { }

  ngOnInit() {
    this.getDayForecast();
  }

  getDayForecast(){
    this.forecastDataService.getDayWeatherDataByCityName(this.city).subscribe(data => {
      this.forecastList = data;
      
      let start = this.forecastList.list[0].dt_txt.slice(10);
      this.ourDate = this.forecastList.list[0].dt_txt.slice(0,10)

      let j = 0;
      this.forecastList.list.forEach(element => {
        if (start == element.dt_txt.slice(10))
        {
          if (j == this.dayPhase){
            this.dayForecast = element;
            this.ourDate = this.ourDate.dt_txt.slice(0,10);
            console.log("ssssssssssss")
            console.log(this.ourDate.dt_txt.slice(0,10));
          }
          j = j + 1;
        }
      });
    })

  }

}
