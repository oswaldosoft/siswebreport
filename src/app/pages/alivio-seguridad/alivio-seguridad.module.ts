import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlivioSeguridadRoutingModule } from './alivio-seguridad-routing.module';
import { AlivioSeguridadComponent } from './alivio-seguridad.component';


@NgModule({
  declarations: [AlivioSeguridadComponent],
  imports: [
    CommonModule,
    AlivioSeguridadRoutingModule
  ]
})
export class AlivioSeguridadModule { }
