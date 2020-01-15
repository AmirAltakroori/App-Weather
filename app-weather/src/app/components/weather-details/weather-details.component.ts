import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherDataService } from 'src/app/services/weather-data.service';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  weatherData;
  constructor(private route: ActivatedRoute, private weatherDataService: WeatherDataService ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.weatherData = this.weatherDataService.getDayWeatherDataById(id);
  }
  

}
