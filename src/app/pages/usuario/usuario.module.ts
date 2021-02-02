import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
