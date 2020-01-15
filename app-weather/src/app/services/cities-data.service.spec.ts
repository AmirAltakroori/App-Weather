import { TestBed } from '@angular/core/testing';

import { CitiesDataService } from './cities-data.service';

describe('CitiesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitiesDataService = TestBed.get(CitiesDataService);
    expect(service).toBeTruthy();
  });
});
