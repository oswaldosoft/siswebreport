import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlivioSeguridadRoutingModule } from './alivio-seguridad-routing.module';
import { AlivioSeguridadComponent } from './alivio-seguridad.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [AlivioSeguridadComponent],
  imports: [
    CommonModule,MaterialModule,
    AlivioSeguridadRoutingModule
  ]
})
export class AlivioSeguridadModule { }
