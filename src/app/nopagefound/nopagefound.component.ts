import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.scss']
})
export class NopagefoundComponent implements OnInit {
public urlImg: string;
  constructor(private router:Router) { 
    document.title = 'Página no encontrada';
    this.urlImg = "../assets/img/404-error.jpg";

  }

  ngOnInit(): void {
  }

  retornar():void{
   this.router.navigate(['login']);
  }

}
