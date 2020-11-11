import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispositivosAliviosRoutingModule } from './dispositivos-alivios-routing.module';
import { DispositivosAliviosComponent } from './dispositivos-alivios.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [DispositivosAliviosComponent],
  imports: [
    CommonModule,MaterialModule,
    DispositivosAliviosRoutingModule
  ]
})
export class DispositivosAliviosModule { }
