import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguridadConvencionalComponent } from './seguridad-convencional.component';

const routes: Routes = [{ path: '', component: SeguridadConvencionalComponent,data:{title:'Seguridad Convencional'} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadConvencionalRoutingModule { }
