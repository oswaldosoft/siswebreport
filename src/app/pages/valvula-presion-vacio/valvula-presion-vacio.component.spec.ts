import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValvulaPresionVacioComponent } from './valvula-presion-vacio.component';

describe('ValvulaPresionVacioComponent', () => {
  let component: ValvulaPresionVacioComponent;
  let fixture: ComponentFixture<ValvulaPresionVacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValvulaPresionVacioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValvulaPresionVacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
