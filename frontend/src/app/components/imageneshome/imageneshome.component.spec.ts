import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageneshomeComponent } from './imageneshome.component';

describe('ImageneshomeComponent', () => {
  let component: ImageneshomeComponent;
  let fixture: ComponentFixture<ImageneshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageneshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageneshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
