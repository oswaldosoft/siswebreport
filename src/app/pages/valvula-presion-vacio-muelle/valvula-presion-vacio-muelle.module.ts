import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValvulaPresionVacioMuelleRoutingModule } from './valvula-presion-vacio-muelle-routing.module';
import { ValvulaPresionVacioMuelleComponent } from './valvula-presion-vacio-muelle.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [ValvulaPresionVacioMuelleComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ValvulaPresionVacioMuelleRoutingModule
  ]
})
export class ValvulaPresionVacioMuelleModule { }
