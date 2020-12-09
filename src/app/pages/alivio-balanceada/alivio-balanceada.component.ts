import { Component, OnInit } from '@angular/core';
interface Condicion {
  value: string;
  descripcion: string;
}

interface Accion {
  value: string;
  descripcion: string;
}

interface Mantenimiento {
  value: string;
  descripcion: string;
}


@Component({
  selector: 'app-alivio-balanceada',
  templateUrl: './alivio-balanceada.component.html',
  styleUrls: ['./alivio-balanceada.component.scss']
})
export class AlivioBalanceadaComponent implements OnInit {

  
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

  mantenimientos: Mantenimiento[] = [
    {value: '1', descripcion: 'Revisión Periódica'},
    {value: '2', descripcion: 'Válvula Disparada '},
    {value: '3', descripcion: 'Válvula Fugando'},
    {value: '4', descripcion: 'Nueva Instalación'},
    {value: '5', descripcion: 'Otro'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
