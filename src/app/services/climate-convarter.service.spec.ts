import { TestBed } from '@angular/core/testing';

import { ClimateConvarterService } from './climate-convarter.service';

describe('ClimateConvarterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClimateConvarterService = TestBed.get(ClimateConvarterService);
    expect(service).toBeTruthy();
  });
});
