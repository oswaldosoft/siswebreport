import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlivioBalanceadaComponent } from './alivio-balanceada.component';

const routes: Routes = [{ path: '', component: AlivioBalanceadaComponent,data:{title:'Alivio balanceada (Fuelle)'} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlivioBalanceadaRoutingModule { }
