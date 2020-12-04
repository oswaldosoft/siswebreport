import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadConvencionalRoutingModule } from './seguridad-convencional-routing.module';
import { SeguridadConvencionalComponent } from './seguridad-convencional.component';


@NgModule({
  declarations: [SeguridadConvencionalComponent],
  imports: [
    CommonModule,
    SeguridadConvencionalRoutingModule
  ],exports:[SeguridadConvencionalComponent]
})
export class SeguridadConvencionalModule { }
