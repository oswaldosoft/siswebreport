import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadBalanceadaRoutingModule } from './seguridad-balanceada-routing.module';
import { SeguridadBalanceadaComponent } from './seguridad-balanceada.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [SeguridadBalanceadaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SeguridadBalanceadaRoutingModule
  ],exports:[SeguridadBalanceadaComponent]
})
export class SeguridadBalanceadaModule { }
