import { TestBed } from '@angular/core/testing';

import { BackupAndPresentService } from './backup-and-present.service';

describe('BackupAndPresentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackupAndPresentService = TestBed.get(BackupAndPresentService);
    expect(service).toBeTruthy();
  });
});
