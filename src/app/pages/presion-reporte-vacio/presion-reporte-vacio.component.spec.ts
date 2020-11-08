import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresionReporteVacioComponent } from './presion-reporte-vacio.component';

describe('PresionReporteVacioComponent', () => {
  let component: PresionReporteVacioComponent;
  let fixture: ComponentFixture<PresionReporteVacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresionReporteVacioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresionReporteVacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
