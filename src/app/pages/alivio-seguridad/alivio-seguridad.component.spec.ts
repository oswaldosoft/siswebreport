import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlivioSeguridadComponent } from './alivio-seguridad.component';

describe('AlivioSeguridadComponent', () => {
  let component: AlivioSeguridadComponent;
  let fixture: ComponentFixture<AlivioSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlivioSeguridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlivioSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
