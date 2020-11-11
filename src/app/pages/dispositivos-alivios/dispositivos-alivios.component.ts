import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-dispositivos-alivios',
  templateUrl: './dispositivos-alivios.component.html',
  styleUrls: ['./dispositivos-alivios.component.scss']
})
export class DispositivosAliviosComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
