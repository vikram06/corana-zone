import { TestBed } from '@angular/core/testing';

import { CoronaTrackerService } from './corona-tracker.service';

describe('CoronaTrackerService', () => {
  let service: CoronaTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
