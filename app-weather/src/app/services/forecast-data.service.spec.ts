import { TestBed } from '@angular/core/testing';

import { ForecastDataService } from './forecast-data.service';

describe('ForecastDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForecastDataService = TestBed.get(ForecastDataService);
    expect(service).toBeTruthy();
  });
});
