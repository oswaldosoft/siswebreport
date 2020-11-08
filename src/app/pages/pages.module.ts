import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [DashboardComponent, PagesComponent],
  imports: [
    CommonModule, SharedModule, MaterialModule, PagesRoutingModule
  ],exports:[
    DashboardComponent, PagesComponent
  ]
})
export class PagesModule { }
