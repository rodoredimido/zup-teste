import { TestBed } from '@angular/core/testing';

import { RandomAPIService } from './random-api.service';

describe('RandomAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomAPIService = TestBed.get(RandomAPIService);
    expect(service).toBeTruthy();
  });
});
