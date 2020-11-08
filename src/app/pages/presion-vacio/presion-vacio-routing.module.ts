import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresionVacioComponent } from './presion-vacio.component';

const routes: Routes = [{ path: '', component: PresionVacioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresionVacioRoutingModule { }
