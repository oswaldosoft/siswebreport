import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlivioTermicoComponent } from './alivio-termico.component';

const routes: Routes = [{ path: '', component: AlivioTermicoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlivioTermicoRoutingModule { }
