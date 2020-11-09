import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public titulo: string;
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild===null),
      map((event:ActivationEnd) => event.snapshot.data)
    ).subscribe(data=>{
      if(data.title === undefined){
        document.title = 'Dashboard';
        this.titulo = '';
      }else{
        this.titulo = data.title;
        document.title = data.title;
      }
      
    });
   }

  ngOnInit(): void {
  
  }

}
