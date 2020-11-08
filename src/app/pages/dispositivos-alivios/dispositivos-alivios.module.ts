import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispositivosAliviosRoutingModule } from './dispositivos-alivios-routing.module';
import { DispositivosAliviosComponent } from './dispositivos-alivios.component';


@NgModule({
  declarations: [DispositivosAliviosComponent],
  imports: [
    CommonModule,
    DispositivosAliviosRoutingModule
  ]
})
export class DispositivosAliviosModule { }
