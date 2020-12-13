import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPrivadosComponent } from './datos-privados.component';

describe('DatosPrivadosComponent', () => {
  let component: DatosPrivadosComponent;
  let fixture: ComponentFixture<DatosPrivadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPrivadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPrivadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
