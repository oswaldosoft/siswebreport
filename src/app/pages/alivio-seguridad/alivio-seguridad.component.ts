import { Component, OnInit } from '@angular/core';

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
export class AlivioSeguridadComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
