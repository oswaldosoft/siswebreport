import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { AlivioBalanceadaRoutingModule } from './alivio-balanceada-routing.module';
import { AlivioBalanceadaComponent } from './alivio-balanceada.component';
import { SeguridadBalanceadaModule } from '../seguridad-balanceada/seguridad-balanceada.module';


@NgModule({
  declarations: [AlivioBalanceadaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AlivioBalanceadaRoutingModule,
    SeguridadBalanceadaModule
  ]
})
export class AlivioBalanceadaModule { }
