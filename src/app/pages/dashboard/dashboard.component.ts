import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import * as XLSX from 'xlsx';
//import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';


import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

import * as pluginDataLabels from 'chartjs-plugin-annotation';




export interface Datos {
  position: number;
  descripcion: string;
}

 interface Dato {
  Unit:string;
  Area:string;
  TAG:string;
  Cat:string;
  Frec:number;
  Ult_Tarado:string;
  Ult_a_Tarado:number;
  Prox_Tarado:number;
  Prox_a_Tarado:number;
  Nueva:string;
  Correct:string;
  Ordinario:string;
  Parada:string;
  STs:number;
  Prio:string;
  Tip_Activ:string;
  Motivo:string;
}

const ELEMENTOS: Dato[] =[
{ Unit:'', Area:'', TAG:'', Cat:'', Frec:0, Ult_Tarado:'', Ult_a_Tarado:0, Prox_Tarado:0, Prox_a_Tarado:0, Nueva:'', Correct:'', Ordinario:'', Parada:'', STs:0, Prio:'', Tip_Activ:'', Motivo:''}

];

const ELEMENT_DATA: Datos[] = [
  {position: 1, descripcion: 'Cuerpo'},
  {position: 2, descripcion: 'Boquilla'},
  {position: 3, descripcion: 'Almena (anillo ajuste)'},
  {position: 4, descripcion: 'Pin de ajuste de Almena'},
  {position: 5, descripcion: 'Junta de pin de Almena'},
  {position: 6, descripcion: 'Disco'},
  {position: 7, descripcion: 'Retenedor del Disco'},
  {position: 8, descripcion: 'Porta disco'},
  {position: 9, descripcion: 'Guía'},
  {position: 10, descripcion: 'Junta de la guía'},
  {position: 11, descripcion: 'Bonete'},
  {position: 12, descripcion: 'Junta del bonete'},
  {position: 13, descripcion: 'Esparrago del cuerpo'},
  {position: 14, descripcion: 'Tuerca del cuerpo'},
  {position: 15, descripcion: 'Vástago'},
  {position: 16, descripcion: 'Retenedor del Vástago'},
  {position: 17, descripcion: 'Arandelas del Muelle'},
  {position: 18, descripcion: 'Muelle'},
  {position: 19, descripcion: 'Tornillo de ajuste'},
  {position: 20, descripcion: 'Tuerca del bloqueo'},
  {position: 21, descripcion: 'Caperuza'},
  {position: 27, descripcion: 'Junta de Caperuza'},
  {position: 40, descripcion: 'Fuelle'},
  {position: 41, descripcion: 'Junta del Fuelle'},

];



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Convencionales' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Balanceadas' }
  ];


 //@ViewChild(MatSort) sort: MatSort;
 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: true}) sort: MatSort;
 data: [][];
tempo:any[]=[];
obj: Dato;

// Doughnut
public doughnutChartLabels: Label[] = ['Válvulas convencionales', 'Válvulas balanceadas', 'Presión y vacio'];
public doughnutChartData: MultiDataSet = [
  [350, 450, 100],
  [50, 150, 120],
  [250, 130, 70],
];
public doughnutChartType: ChartType = 'doughnut';
public colors:Color[] =[
  {backgroundColor:['#9E120E','#FF5800','#FFB414']},
  {backgroundColor:['#9E120E','#FF5800','#FFB414']},
  {backgroundColor:['#9E120E','#FF5800','#FFB414']}
];
 constructor() { 
   
 }

 ngOnInit(): void {
  this.paginator._intl.itemsPerPageLabel = 'Por páginas';
 }

 ngAfterViewInit(): void {
   this.dataSources.paginator = this.paginator;
   this.dataSources.sort = this.sort;
   this.dataSources.sort = this.sort;

   if(localStorage.getItem('data')){
    this.dataSources.data = JSON.parse(localStorage.getItem('data'));
   }

 }

 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSources.filter = filterValue.trim().toLowerCase();
 }

 onFileChange(evt: any) {
  const target : DataTransfer =  <DataTransfer>(evt.target);
  
  if (target.files.length !== 1) throw new Error('Cannot use multiple files');

  const reader: FileReader = new FileReader();

  reader.onload = (e: any) => {
    const bstr: string = e.target.result;

    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

    const wsname : string = wb.SheetNames[1];

    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    console.log(ws);

    this.data = (XLSX.utils.sheet_to_json(ws, { header: 2 }));
 
    let x = this.data.slice(1);

    let a:number =0;
    for (let i = 0; i<this.data.length; i++) {
      if (i>=0) {
    
       this.tempo.push(this.data[i]);
      // localStorage.setItem('data',this.data[i]);
      
      }
    }
    localStorage.setItem('data',JSON.stringify(this.tempo));
   //this.dataSources.data= this.tempo; 
   this.dataSources.data = JSON.parse(localStorage.getItem('data'));
   
  };
  
  
  reader.readAsBinaryString(target.files[0]);

  

}

 displayedColumns: string[] = ['Unit', 'descripcion'];
 //displayedColumnas: string[] = ['unidad', 'responsable','tag','cat','Frec','Ult_Tarado','Ult_a_Tarado','Prox_Tarado','Prox_a_Tarado','Nueva','Correct','Ordinario','Parada','STs','Prio','Tip_Activ','Motivo'];
 displayedColumnas: string[] = ['Unit', 'Area','TAG','Cat','Frec','Ult_Tarado','Ult_a_Tarado','Prox_Tarado','Prox_a_Tarado','Nueva','Correct','Ordinario','Parada','STs','Prio','Tip_Activ','Motivo'];
 dataSources = new MatTableDataSource();

 // events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}


public randomize(): void {
  // Only Change 3 values
  this.barChartData[0].data = [
    Math.round(Math.random() * 100),
    59,
    80,
    (Math.random() * 100),
    56,
    (Math.random() * 100),
    40 ];
}

}
