import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguridadBalanceadaComponent } from './seguridad-balanceada.component';

const routes: Routes = [{ path: '', component: SeguridadBalanceadaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadBalanceadaRoutingModule { }
