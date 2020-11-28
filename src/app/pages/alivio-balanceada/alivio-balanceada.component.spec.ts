import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlivioBalanceadaComponent } from './alivio-balanceada.component';

describe('AlivioBalanceadaComponent', () => {
  let component: AlivioBalanceadaComponent;
  let fixture: ComponentFixture<AlivioBalanceadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlivioBalanceadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlivioBalanceadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
