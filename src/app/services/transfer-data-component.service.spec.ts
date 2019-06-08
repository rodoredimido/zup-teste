import { TestBed } from '@angular/core/testing';

import { TransferDataComponentService } from './transfer-data-component.service';

describe('TransferDataComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferDataComponentService = TestBed.get(TransferDataComponentService);
    expect(service).toBeTruthy();
  });
});
