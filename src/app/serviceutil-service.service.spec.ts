import { TestBed } from '@angular/core/testing';

import { ServiceutilServiceService } from './serviceutil-service.service';

describe('ServiceutilServiceService', () => {
  let service: ServiceutilServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceutilServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
