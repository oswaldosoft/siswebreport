import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-left',
  templateUrl: './header-left.component.html',
  styleUrls: ['./header-left.component.scss']
})
export class HeaderLeftComponent implements OnInit {
  public env=environment;

  constructor() { }

  ngOnInit(): void {
  }

  menu():void{
    this.env.show_menu=!this.env.show_menu;
  }

}
