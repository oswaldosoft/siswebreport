import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlivioSeguridadRoutingModule } from './alivio-seguridad-routing.module';
import { AlivioSeguridadComponent } from './alivio-seguridad.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SeguridadConvencionalModule } from '../seguridad-convencional/seguridad-convencional.module';

@NgModule({
  declarations: [AlivioSeguridadComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AlivioSeguridadRoutingModule,
    SeguridadConvencionalModule
  ]
})
export class AlivioSeguridadModule { }
