import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlivioSeguridadComponent } from './alivio-seguridad.component';

const routes: Routes = [{ path: '', component: AlivioSeguridadComponent,data:{title:'Alivio convencional'} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlivioSeguridadRoutingModule { }
