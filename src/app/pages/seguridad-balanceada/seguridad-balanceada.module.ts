import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadBalanceadaRoutingModule } from './seguridad-balanceada-routing.module';
import { SeguridadBalanceadaComponent } from './seguridad-balanceada.component';


@NgModule({
  declarations: [SeguridadBalanceadaComponent],
  imports: [
    CommonModule,
    SeguridadBalanceadaRoutingModule
  ]
})
export class SeguridadBalanceadaModule { }
