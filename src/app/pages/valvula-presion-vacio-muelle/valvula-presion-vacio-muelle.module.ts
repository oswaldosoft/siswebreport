import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValvulaPresionVacioMuelleRoutingModule } from './valvula-presion-vacio-muelle-routing.module';
import { ValvulaPresionVacioMuelleComponent } from './valvula-presion-vacio-muelle.component';


@NgModule({
  declarations: [ValvulaPresionVacioMuelleComponent],
  imports: [
    CommonModule,
    ValvulaPresionVacioMuelleRoutingModule
  ]
})
export class ValvulaPresionVacioMuelleModule { }
