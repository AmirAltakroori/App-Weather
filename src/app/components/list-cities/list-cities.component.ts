import { environment } from 'src/environments/environment.prod';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data.service';

@Component({
  selector: 'list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss']
})
export class ListCitiesComponent implements OnInit {

  @Output() listIsHidden = new EventEmitter();
  @Output() returnedCityName = new EventEmitter();
  @Input() citiesList;
  
  closeIcon;
  filterCity;

  constructor(private weatherDataService: WeatherDataService) { }
  
  ngOnInit() {
    this.closeIcon = environment.closeIcon;
  }

  closeList(){
    this.listIsHidden.emit(false);
  }

  changeCity(city){
    this.returnedCityName.emit(city)
    this.closeList();
  }

}
