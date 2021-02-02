import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface Datos {
  position: number;
  descripcion: string;
}

const ELEMENT_DATA: Datos[] = [
  {position: 1, descripcion: 'Cuerpo'},
  {position: 2, descripcion: 'Asiento'},
  {position: 3, descripcion: 'Caperuza protección'},
  {position: 4, descripcion: 'Bonete'},
  {position: 5, descripcion: 'Caperuza de bonete'},
  {position: 6, descripcion: 'Tornillo de ajuste'},
  {position: 7, descripcion: 'Tuerca de bloqueo'},
  {position: 8, descripcion: 'Arandelas de muelle'},
  {position: 9, descripcion: 'Muelle'},
  {position: 10, descripcion: 'Tornillos de caperuza'},
  {position: 11, descripcion: 'Tapa de lado vacío'},
  {position: 12, descripcion: 'Tornillos de la tapa'},
  {position: 13, descripcion: 'Arandela del sellado'},
  {position: 14, descripcion: 'Junta'},
  {position: 15.1, descripcion: 'Paleta vacio'},
  {position: 15, descripcion: 'Paleta presión'},
  {position: 16, descripcion: 'Vástago de la paleta'},
  {position: 17, descripcion: 'Postes de guía de paleta'},
  {position: 18, descripcion: 'Disco espaciador presión'},
  {position: 18.1, descripcion: 'Disco espaciador vacio'},
  {position: 19, descripcion: 'Disco respaldo diafragma presión'},
  {position: 19.1, descripcion: 'Disco respaldo diafragma vacío'},
  {position: 20, descripcion: 'Diafragma presión'},
  {position: 20.1, descripcion: 'Diafragma vacio'},
  {position: 21, descripcion: 'Disco soporte diafragma presión'},
  {position: 21.1, descripcion: 'Disco soporte diafragma vacio'},
  {position: 22, descripcion: 'Pesas paleta presión'},
  {position: 23, descripcion: 'Presas paleta vacío'},
 
];


@Component({
  selector: 'app-valvula-presion-vacio-muelle',
  templateUrl: './valvula-presion-vacio-muelle.component.html',
  styleUrls: ['./valvula-presion-vacio-muelle.component.scss']
})
export class ValvulaPresionVacioMuelleComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }
  
  ngOnInit(): void {
  }

  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  displayedColumns: string[] = ['position', 'descripcion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
