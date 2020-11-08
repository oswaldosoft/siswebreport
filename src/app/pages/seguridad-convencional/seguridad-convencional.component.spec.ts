import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadConvencionalComponent } from './seguridad-convencional.component';

describe('SeguridadConvencionalComponent', () => {
  let component: SeguridadConvencionalComponent;
  let fixture: ComponentFixture<SeguridadConvencionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadConvencionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadConvencionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
