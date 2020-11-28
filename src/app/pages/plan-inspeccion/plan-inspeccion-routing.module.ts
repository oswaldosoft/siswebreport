import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanInspeccionComponent } from './plan-inspeccion.component';

const routes: Routes = [{ path: '', component: PlanInspeccionComponent,data:{title:'Plan de inspección'} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanInspeccionRoutingModule { }
