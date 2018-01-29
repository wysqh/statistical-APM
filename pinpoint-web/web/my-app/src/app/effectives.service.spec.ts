import { TestBed, inject } from '@angular/core/testing';

import { EffectivesService } from './effectives.service';

describe('EffectivesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EffectivesService]
    });
  });

  it('should be created', inject([EffectivesService], (service: EffectivesService) => {
    expect(service).toBeTruthy();
  }));
});
