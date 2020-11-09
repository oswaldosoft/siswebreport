import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilotoOperadaComponent } from './piloto-operada.component';

const routes: Routes = [{ path: '', component: PilotoOperadaComponent,data:{title:'Piloto Operada'} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PilotoOperadaRoutingModule { }
