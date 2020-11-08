import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header-right',
  templateUrl: './header-right.component.html',
  styleUrls: ['./header-right.component.scss']
})
export class HeaderRightComponent implements OnInit {
  public foto_avatar: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.foto_avatar = 'http://i.pravatar.cc/300'; 
  }

  salida():void{
    this.router.navigate(['login']);
  }
  
  perfil():void{
    this.router.navigate(['/dashboard/usuario']);
  }

}
