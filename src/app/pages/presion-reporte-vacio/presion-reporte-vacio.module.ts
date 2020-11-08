import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresionReporteVacioRoutingModule } from './presion-reporte-vacio-routing.module';
import { PresionReporteVacioComponent } from './presion-reporte-vacio.component';


@NgModule({
  declarations: [PresionReporteVacioComponent],
  imports: [
    CommonModule,
    PresionReporteVacioRoutingModule
  ]
})
export class PresionReporteVacioModule { }
