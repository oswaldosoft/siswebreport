import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderLeftComponent } from './header-left/header-left.component';
import { HeaderRightComponent } from './header-right/header-right.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [HeaderComponent, BreadcrumbsComponent, HeaderLeftComponent, HeaderRightComponent, SidebarComponent],
  imports: [
    CommonModule,MaterialModule
  ],exports:[
    HeaderComponent, BreadcrumbsComponent, HeaderLeftComponent, HeaderRightComponent, SidebarComponent
  ]
})
export class SharedModule { }
