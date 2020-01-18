import { ForecastDataService } from 'src/app/services/forecast-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss']
})
export class ForecastDetailsComponent implements OnInit {

  forecastDetails;

  constructor(private forecastDataService: ForecastDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let city = parseInt(this.route.snapshot.paramMap.get('city'));
    this.getDetailsForecastById(city);
    
  }

  getDetailsForecastById(id){
    this.forecastDataService.getDataById(id).subscribe(data => {
      this.forecastDetails = data;
      this.forecastDetails = this.forecastDetails.list[0];
  });
}

}
