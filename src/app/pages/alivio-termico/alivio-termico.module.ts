import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlivioTermicoRoutingModule } from './alivio-termico-routing.module';
import { AlivioTermicoComponent } from './alivio-termico.component';


@NgModule({
  declarations: [AlivioTermicoComponent],
  imports: [
    CommonModule,
    AlivioTermicoRoutingModule
  ]
})
export class AlivioTermicoModule { }
