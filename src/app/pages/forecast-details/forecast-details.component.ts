import { StorageService } from './../../services/storage.service';
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

  constructor(
    private route: ActivatedRoute,
    private storage: StorageService
  ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getDetailsForecastById(id);
  }

  getDetailsForecastById(id) {

    try {
      let forecasteList = this.storage.weathersData;
      forecasteList.forEach(forecast => {
        if (forecast.id == id) {
          this.forecastData = forecast;
        }
      });

    } catch (error) {
      console.log(error)
    }

  }

}
