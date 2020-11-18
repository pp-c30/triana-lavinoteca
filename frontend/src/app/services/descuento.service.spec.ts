import { TestBed } from '@angular/core/testing';

import { DescuentoService } from './descuento.service';

describe('DescuentosService', () => {
  let service: DescuentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescuentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

