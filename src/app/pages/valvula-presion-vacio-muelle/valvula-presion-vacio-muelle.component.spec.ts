import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValvulaPresionVacioMuelleComponent } from './valvula-presion-vacio-muelle.component';

describe('ValvulaPresionVacioMuelleComponent', () => {
  let component: ValvulaPresionVacioMuelleComponent;
  let fixture: ComponentFixture<ValvulaPresionVacioMuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValvulaPresionVacioMuelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValvulaPresionVacioMuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
