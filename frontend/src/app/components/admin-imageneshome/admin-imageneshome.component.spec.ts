import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImageneshomeComponent } from './admin-imageneshome.component';

describe('AdminImageneshomeComponent', () => {
  let component: AdminImageneshomeComponent;
  let fixture: ComponentFixture<AdminImageneshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImageneshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImageneshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
