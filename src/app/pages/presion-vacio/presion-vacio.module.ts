import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresionVacioRoutingModule } from './presion-vacio-routing.module';
import { PresionVacioComponent } from './presion-vacio.component';


@NgModule({
  declarations: [PresionVacioComponent],
  imports: [
    CommonModule,
    PresionVacioRoutingModule
  ]
})
export class PresionVacioModule { }
