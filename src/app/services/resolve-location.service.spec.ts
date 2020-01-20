import { TestBed } from '@angular/core/testing';

import { ResolveLocationService } from './resolve-location.service';

describe('ResolveLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveLocationService = TestBed.get(ResolveLocationService);
    expect(service).toBeTruthy();
  });
});
