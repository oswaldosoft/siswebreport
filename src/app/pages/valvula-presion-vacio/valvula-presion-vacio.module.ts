import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValvulaPresionVacioRoutingModule } from './valvula-presion-vacio-routing.module';
import { ValvulaPresionVacioComponent } from './valvula-presion-vacio.component';


@NgModule({
  declarations: [ValvulaPresionVacioComponent],
  imports: [
    CommonModule,
    ValvulaPresionVacioRoutingModule
  ]
})
export class ValvulaPresionVacioModule { }
