import { TestBed } from '@angular/core/testing';

import { ForfaitAPIService } from './forfait-api.service';

describe('ForfaitAPIService', () => {
  let service: ForfaitAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForfaitAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
