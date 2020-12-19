import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import * as XLSX from 'xlsx';



export interface Datos {
  position: number;
  descripcion: string;
}

 interface Dato {
  unidad:string;
  responsable:string;
  tag:string;
  cat:string;
  frec_years:number;
  fecha_ultimo_tarado:string;
  year_ultimo_tarado:number;
  fecha_proximo_tarado_x_year:number;
  year_de_proximo_tarado_x_categoria:number;
  nueva:string;
  correct:string;
  plan_ordinario:string;
  ciclo_parada:string;
  sts:number;
  prio:string;
  tipo_activ:string;
  motivo:string;
}

const ELEMENTOS: Dato[] =[
{ unidad:'', responsable:'', tag:'', cat:'', frec_years:0, fecha_ultimo_tarado:'', year_ultimo_tarado:0, fecha_proximo_tarado_x_year:0, year_de_proximo_tarado_x_categoria:0, nueva:'', correct:'', plan_ordinario:'', ciclo_parada:'', sts:0, prio:'', tipo_activ:'', motivo:''}

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
 
 //@ViewChild(MatSort) sort: MatSort;
 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: true}) sort: MatSort;
 data: [][];
tempo:any[]=[];
obj: Dato;
 constructor() { 
 }

 ngOnInit(): void {
  this.paginator._intl.itemsPerPageLabel = 'Por páginas';
 }

 ngAfterViewInit(): void {
   this.dataSources.paginator = this.paginator;
   this.dataSources.sort = this.sort;
   this.dataSources.sort = this.sort;

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
      if (i>0) {
    
       this.tempo.push(this.data[i]);
      }
    }
   
   this.dataSources.data= this.tempo; 
  };
  
  
  reader.readAsBinaryString(target.files[0]);

  

}

 displayedColumns: string[] = ['position', 'descripcion'];
 displayedColumnas: string[] = ['unidad', 'responsable','tag','cat','frec_years','fecha_ultimo_tarado','year_ultimo_tarado','fecha_proximo_tarado_x_year','year_de_proximo_tarado_x_categoria','nueva','correct','plan_ordinario','ciclo_parada','sts','prio','tipo_activ','motivo'];
 dataSources = new MatTableDataSource();



}
