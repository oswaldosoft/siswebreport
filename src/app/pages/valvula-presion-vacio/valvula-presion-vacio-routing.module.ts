import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValvulaPresionVacioComponent } from './valvula-presion-vacio.component';

const routes: Routes = [{ path: '', component: ValvulaPresionVacioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValvulaPresionVacioRoutingModule { }
