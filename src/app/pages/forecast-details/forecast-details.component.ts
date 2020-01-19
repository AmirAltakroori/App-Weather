import { ClimateConvarterService } from './../../services/climate-convarter.service';
import { environment } from 'src/environments/environment.prod';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherComponent } from 'src/app/components/weather/weather.component';

@Component({
  selector: 'forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss']
})
export class ForecastDetailsComponent implements OnInit {

  forecastData: WeatherComponent;
  urlImg: string;

  constructor(private weatherDataService: WeatherDataService,
    private route: ActivatedRoute,
    private climateConverter: ClimateConvarterService) { }

  ngOnInit() {
    let city = parseInt(this.route.snapshot.paramMap.get('city'));
    this.getDetailsForecastById(city);
  }

  getDetailsForecastById(city) {

    let searchPara = {
      q: city,
      units: `metric`
    }

    this.weatherDataService.getClimateData("forecast", searchPara).subscribe(data => {
      this.forecastData = this.climateConverter.fillClimateData("forecaste", data);
      this.urlImg = environment.weatherIconUrl + this.forecastData.icon;
    });

  }

}
