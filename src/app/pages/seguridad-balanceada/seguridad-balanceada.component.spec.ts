import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadBalanceadaComponent } from './seguridad-balanceada.component';

describe('SeguridadBalanceadaComponent', () => {
  let component: SeguridadBalanceadaComponent;
  let fixture: ComponentFixture<SeguridadBalanceadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadBalanceadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadBalanceadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
