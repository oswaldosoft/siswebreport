import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispositivosAliviosComponent } from './dispositivos-alivios.component';

const routes: Routes = [{ path: '', component: DispositivosAliviosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispositivosAliviosRoutingModule { }
