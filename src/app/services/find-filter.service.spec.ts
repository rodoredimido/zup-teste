import { TestBed } from '@angular/core/testing';

import { FindFilterService } from './find-filter.service';

describe('FindFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindFilterService = TestBed.get(FindFilterService);
    expect(service).toBeTruthy();
  });
});
