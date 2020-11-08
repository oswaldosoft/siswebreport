import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotoOperadaComponent } from './piloto-operada.component';

describe('PilotoOperadaComponent', () => {
  let component: PilotoOperadaComponent;
  let fixture: ComponentFixture<PilotoOperadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotoOperadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotoOperadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
