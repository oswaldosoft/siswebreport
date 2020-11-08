import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresionReporteVacioComponent } from './presion-reporte-vacio.component';

const routes: Routes = [{ path: '', component: PresionReporteVacioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresionReporteVacioRoutingModule { }
