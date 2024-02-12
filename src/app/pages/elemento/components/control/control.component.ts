import { Component } from '@angular/core';
import {Tarea} from "../../../../models/elemento/tarea.models";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent {
  actividades: string[] = ['diego', 'Lipa'];
  nuevaActividad: string = '';
  modoEdicion: boolean = false;
  indiceEdicion: number | null = null;

  actividadesObjeto: Tarea[] = [
    {
      id:1,
      titulo: 'Programando',
      completado: true
    }
  ];

  agregarActividad(): void {
    if (this.nuevaActividad.trim() !== '') {
      this.actividades.push(this.nuevaActividad);
      this.nuevaActividad = '';
    }
  }

  eliminarActividad(index: number): void {
    this.actividades.splice(index, 1);
  }

  editarActividad(index: number): void {
    this.nuevaActividad = this.actividades[index];
    this.indiceEdicion = index;
    this.modoEdicion = true;
  }

  guardarEdicion(): void {
    if (this.indiceEdicion !== null && this.nuevaActividad.trim() !== '') {
      this.actividades[this.indiceEdicion] = this.nuevaActividad;
      this.nuevaActividad = '';
      this.indiceEdicion = null;
      this.modoEdicion = false;
    }
  }
}

