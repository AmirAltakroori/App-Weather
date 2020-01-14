import { TestBed } from '@angular/core/testing';

import { GetWeatherDataService } from './get-weather-data.service';

describe('GetWeatherDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetWeatherDataService = TestBed.get(GetWeatherDataService);
    expect(service).toBeTruthy();
  });
});
