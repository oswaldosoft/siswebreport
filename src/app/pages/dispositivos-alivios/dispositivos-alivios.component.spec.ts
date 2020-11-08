import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivosAliviosComponent } from './dispositivos-alivios.component';

describe('DispositivosAliviosComponent', () => {
  let component: DispositivosAliviosComponent;
  let fixture: ComponentFixture<DispositivosAliviosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositivosAliviosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivosAliviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
