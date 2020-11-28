import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanInspeccionRoutingModule } from './plan-inspeccion-routing.module';
import { PlanInspeccionComponent } from './plan-inspeccion.component';


@NgModule({
  declarations: [PlanInspeccionComponent],
  imports: [
    CommonModule,
    PlanInspeccionRoutingModule
  ]
})
export class PlanInspeccionModule { }
