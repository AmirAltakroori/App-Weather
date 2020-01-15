import { TestBed } from '@angular/core/testing';

import { WeatherDataService } from './weather-data.service';

describe('GetWeatherDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherDataService = TestBed.get(WeatherDataService);
    expect(service).toBeTruthy();
  });
});
