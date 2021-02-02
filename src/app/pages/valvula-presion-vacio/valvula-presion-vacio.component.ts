import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface Datos {
  position: number;
  descripcion: string;
}

const ELEMENT_DATA: Datos[] = [
  {position: 1, descripcion: 'Cuerpo de la válvula'},
  {position: 2, descripcion: 'Caperuza protección'},
  {position: 3, descripcion: 'Tuercas Caperuza'},
  {position: 4, descripcion: 'Anillo espaciador'},
  {position: 5, descripcion: 'Paleta de presión'},
  {position: 6, descripcion: 'Vástago paleta de presión'},
  {position: 7, descripcion: 'Diafragma paleta de presión'},
  {position: 8, descripcion: 'Disco respaldo diafragma de presión'},
  {position: 9, descripcion: 'Postes guías paleta de presión'},
  {position: 10, descripcion: 'Disco de soporte de diafragma'},
  {position: 11, descripcion: 'Tapa lado vacío'},
  {position: 12, descripcion: 'Junta'},
  {position: 13, descripcion: 'Paleta lado vacio'},
  {position: 14, descripcion: 'Vástago paleta lado vacío'},
  {position: 15, descripcion: 'Diafragma paleta vacío'},
  {position: 16, descripcion: 'Disco respaldo diafragma vacío'},
  {position: 17, descripcion: 'Postes guías paleta lado vacío'},
  {position: 18, descripcion: 'Pantalla lado vacío'},
  {position: 19, descripcion: 'Anillo de retención de pantalla'},
  {position: 20, descripcion: 'Pantalla lado presión'},
  {position: 21, descripcion: 'Arandela de sellado'},
  {position: 22, descripcion: 'Disco espaciador'},
  {position: 23, descripcion: 'Arandela de sellado'},
  {position: 24, descripcion: 'Pesas paleta de presión'},
  {position: 25, descripcion: 'Pesas paleta vacío'},
 
];

@Component({
  selector: 'app-valvula-presion-vacio',
  templateUrl: './valvula-presion-vacio.component.html',
  styleUrls: ['./valvula-presion-vacio.component.scss']
})
export class ValvulaPresionVacioComponent implements OnInit, AfterViewInit {

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
