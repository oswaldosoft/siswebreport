import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlivioBalanceadaRoutingModule } from './alivio-balanceada-routing.module';
import { AlivioBalanceadaComponent } from './alivio-balanceada.component';


@NgModule({
  declarations: [AlivioBalanceadaComponent],
  imports: [
    CommonModule,
    AlivioBalanceadaRoutingModule
  ]
})
export class AlivioBalanceadaModule { }
