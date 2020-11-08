import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresionVacioComponent } from './presion-vacio.component';

describe('PresionVacioComponent', () => {
  let component: PresionVacioComponent;
  let fixture: ComponentFixture<PresionVacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresionVacioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresionVacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
