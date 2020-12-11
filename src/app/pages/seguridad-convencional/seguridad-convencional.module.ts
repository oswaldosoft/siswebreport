import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadConvencionalRoutingModule } from './seguridad-convencional-routing.module';
import { SeguridadConvencionalComponent } from './seguridad-convencional.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [SeguridadConvencionalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SeguridadConvencionalRoutingModule
  ],exports:[SeguridadConvencionalComponent]
})
export class SeguridadConvencionalModule { }
