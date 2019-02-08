import { TestBed } from '@angular/core/testing';

import { HousekeepingService } from './housekeeping.service';

describe('HousekeepingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HousekeepingService = TestBed.get(HousekeepingService);
    expect(service).toBeTruthy();
  });
});
