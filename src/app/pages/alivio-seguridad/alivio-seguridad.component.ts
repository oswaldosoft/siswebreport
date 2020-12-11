import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

interface Datos {
  position: number;
  descripcion: string;
}

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
  {position: 41, descripcion: 'Tapo de Venteo'},

];


interface Condicion {
  value: string;
  descripcion: string;
}

interface Accion {
  value: string;
  descripcion: string;
}


@Component({
  selector: 'app-alivio-seguridad',
  templateUrl: './alivio-seguridad.component.html',
  styleUrls: ['./alivio-seguridad.component.scss']
})
export class AlivioSeguridadComponent implements OnInit, AfterViewInit {

  acciones: Accion[] = [
    {value: 'N', descripcion: 'Reemplazo (componente Nuevo)'},
    {value: 'L', descripcion: 'Limpieza'},
    {value: 'S', descripcion: 'Soldadura'},
    {value: 'Lap', descripcion: 'Lapeado'},
    {value: 'M', descripcion: 'Mecanizado / Torneado'},
    {value: 'P', descripcion: 'Pintura'}
  ];

  condiciones: Condicion[] = [
    {value: 'B', descripcion: 'Buenas condiciones'},
    {value: 'DX', descripcion: 'Depósitos Leve (DL), Media (DM), Alta (DA)'},
    {value: 'CX', descripcion: 'Corroído Leve (CL), Media ( CM ), Alta (CA )'},
    {value: 'F', descripcion: 'Fisurado'},
    {value: 'R', descripcion: 'Rayado '},
    {value: 'D', descripcion: 'TaDeformado / Golpe Mecánicocos'}
  ];

  
  //@ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  displayedColumns: string[] = ['N', 'Componente','Recibido','Acción','Final'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
