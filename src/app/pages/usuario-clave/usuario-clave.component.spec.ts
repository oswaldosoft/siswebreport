import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioClaveComponent } from './usuario-clave.component';

describe('UsuarioClaveComponent', () => {
  let component: UsuarioClaveComponent;
  let fixture: ComponentFixture<UsuarioClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioClaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
