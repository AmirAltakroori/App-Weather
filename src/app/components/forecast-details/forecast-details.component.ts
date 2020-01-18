import { WeatherDataService } from 'src/app/services/weather-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss']
})
export class ForecastDetailsComponent implements OnInit {

  forecastDetails;

  constructor(private weatherDataService: WeatherDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let city = parseInt(this.route.snapshot.paramMap.get('city'));
    this.getDetailsForecastById(city);
    
  }

  getDetailsForecastById(neededID){

    let searchPara = {
      id: neededID
    }

    this.weatherDataService.getClimateData("forecast", searchPara).subscribe(data => {
      this.forecastDetails = data;
      this.forecastDetails = this.forecastDetails.list[0];
  });
}

}
