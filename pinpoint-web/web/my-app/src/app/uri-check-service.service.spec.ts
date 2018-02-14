import { TestBed, inject } from '@angular/core/testing';

import { UriCheckServiceService } from './uri-check-service.service';

describe('UriCheckServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UriCheckServiceService]
    });
  });

  it('should be created', inject([UriCheckServiceService], (service: UriCheckServiceService) => {
    expect(service).toBeTruthy();
  }));
});
