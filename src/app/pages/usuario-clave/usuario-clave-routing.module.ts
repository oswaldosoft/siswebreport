import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioClaveComponent } from './usuario-clave.component';

const routes: Routes = [{ path: '', component: UsuarioClaveComponent,data:{title:'Actualización de contraseña'} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioClaveRoutingModule { }
