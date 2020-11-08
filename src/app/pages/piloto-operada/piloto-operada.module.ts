import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PilotoOperadaRoutingModule } from './piloto-operada-routing.module';
import { PilotoOperadaComponent } from './piloto-operada.component';


@NgModule({
  declarations: [PilotoOperadaComponent],
  imports: [
    CommonModule,
    PilotoOperadaRoutingModule
  ]
})
export class PilotoOperadaModule { }
