import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlivioTermicoComponent } from './alivio-termico.component';

describe('AlivioTermicoComponent', () => {
  let component: AlivioTermicoComponent;
  let fixture: ComponentFixture<AlivioTermicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlivioTermicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlivioTermicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
