import { TestBed } from '@angular/core/testing';

import { VariedadesService } from './variedades.service';

describe('VariedadesService', () => {
  let service: VariedadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariedadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
