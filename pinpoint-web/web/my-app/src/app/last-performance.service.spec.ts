import { TestBed, inject } from '@angular/core/testing';

import { LastPerformanceService } from './last-performance.service';

describe('LastPerformanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LastPerformanceService]
    });
  });

  it('should be created', inject([LastPerformanceService], (service: LastPerformanceService) => {
    expect(service).toBeTruthy();
  }));
});
