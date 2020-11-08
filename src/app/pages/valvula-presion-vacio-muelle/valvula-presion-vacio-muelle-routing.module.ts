import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValvulaPresionVacioMuelleComponent } from './valvula-presion-vacio-muelle.component';

const routes: Routes = [{ path: '', component: ValvulaPresionVacioMuelleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValvulaPresionVacioMuelleRoutingModule { }
