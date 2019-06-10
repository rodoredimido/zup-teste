import { TestBed } from '@angular/core/testing';


import { TransferDataComponentService } from './transfer-data-component.service';

describe('TransferDataComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferDataComponentService = TestBed.get(TransferDataComponentService);
    service.url = 'candidato';
    expect(service.url).toEqual('candidato');
  });
});
