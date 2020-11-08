import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioClaveRoutingModule } from './usuario-clave-routing.module';
import { UsuarioClaveComponent } from './usuario-clave.component';


@NgModule({
  declarations: [UsuarioClaveComponent],
  imports: [
    CommonModule,
    UsuarioClaveRoutingModule
  ]
})
export class UsuarioClaveModule { }
