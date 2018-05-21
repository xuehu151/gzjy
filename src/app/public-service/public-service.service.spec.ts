import { TestBed, inject } from '@angular/core/testing';

import { PublicServiceService } from './public-service.service';

describe('PublicServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicServiceService]
    });
  });

  it('should be created', inject([PublicServiceService], (service: PublicServiceService) => {
    expect(service).toBeTruthy();
  }));
});
