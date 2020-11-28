import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanInspeccionComponent } from './plan-inspeccion.component';

describe('PlanInspeccionComponent', () => {
  let component: PlanInspeccionComponent;
  let fixture: ComponentFixture<PlanInspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanInspeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
