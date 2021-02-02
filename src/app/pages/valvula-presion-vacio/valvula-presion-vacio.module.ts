import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ValvulaPresionVacioRoutingModule } from './valvula-presion-vacio-routing.module';
import { ValvulaPresionVacioComponent } from './valvula-presion-vacio.component';


@NgModule({
  declarations: [ValvulaPresionVacioComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ValvulaPresionVacioRoutingModule
  ]
})
export class ValvulaPresionVacioModule { }
