import { TestBed } from '@angular/core/testing';

import { ImageneshomeService } from './imageneshome.service';

describe('ImageneshomeService', () => {
  let service: ImageneshomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageneshomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
