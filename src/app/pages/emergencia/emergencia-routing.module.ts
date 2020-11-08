import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergenciaComponent } from './emergencia.component';

const routes: Routes = [{ path: '', component: EmergenciaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergenciaRoutingModule { }
