import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routesint: Routes = [
 
  {path: '', component: PagesComponent,
  children: [
    {path: 'dashboard', component: PagesComponent},
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
