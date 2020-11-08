import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmergenciaRoutingModule } from './emergencia-routing.module';
import { EmergenciaComponent } from './emergencia.component';


@NgModule({
  declarations: [EmergenciaComponent],
  imports: [
    CommonModule,
    EmergenciaRoutingModule
  ]
})
export class EmergenciaModule { }
