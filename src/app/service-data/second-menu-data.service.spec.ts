import { TestBed, inject } from '@angular/core/testing';

import { SecondMenuDataService } from './second-menu-data.service';

describe('SecondMenuDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondMenuDataService]
    });
  });

  it('should be created', inject([SecondMenuDataService], (service: SecondMenuDataService) => {
    expect(service).toBeTruthy();
  }));
});
