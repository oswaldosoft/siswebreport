import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routesint: Routes = [
 
  {path: '', component: PagesComponent,
  children: [
    {path: 'dashboard', component: PagesComponent,data:{title:'Dashboard'}},
    { path: 'dispositivos-alivios', loadChildren: () => import('./dispositivos-alivios/dispositivos-alivios.module').then(m => m.DispositivosAliviosModule) },
    { path: 'alivio-seguridad', loadChildren: () => import('./alivio-seguridad/alivio-seguridad.module').then(m => m.AlivioSeguridadModule) },
    { path: 'alivio-termico', loadChildren: () => import('./alivio-termico/alivio-termico.module').then(m => m.AlivioTermicoModule) },
    { path: 'piloto-operada', loadChildren: () => import('./piloto-operada/piloto-operada.module').then(m => m.PilotoOperadaModule) },
    { path: 'presion-vacio', loadChildren: () => import('./presion-vacio/presion-vacio.module').then(m => m.PresionVacioModule) },
    { path: 'presion-reporte-vacio', loadChildren: () => import('./presion-reporte-vacio/presion-reporte-vacio.module').then(m => m.PresionReporteVacioModule) },
    { path: 'emergencia', loadChildren: () => import('./emergencia/emergencia.module').then(m => m.EmergenciaModule) },
    { path: 'seguridad-convencional', loadChildren: () => import('./seguridad-convencional/seguridad-convencional.module').then(m => m.SeguridadConvencionalModule) },
    { path: 'seguridad-balanceada', loadChildren: () => import('./seguridad-balanceada/seguridad-balanceada.module').then(m => m.SeguridadBalanceadaModule) },
    { path: 'valvula-presion-vacio', loadChildren: () => import('./valvula-presion-vacio/valvula-presion-vacio.module').then(m => m.ValvulaPresionVacioModule) },
    { path: 'valvula-presion-vacio-muelle', loadChildren: () => import('./valvula-presion-vacio-muelle/valvula-presion-vacio-muelle.module').then(m => m.ValvulaPresionVacioMuelleModule) },
    { path: 'reportes', loadChildren: () => import('./reportes/reportes.module').then(m => m.ReportesModule) },
    { path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
    { path: 'usuario-clave', loadChildren: () => import('./usuario-clave/usuario-clave.module').then(m => m.UsuarioClaveModule) },

    {path: '**', pathMatch:'full', redirectTo:''}
  ]},
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routesint)
  ], exports:[RouterModule]
})
export class PagesRoutingModule { }
