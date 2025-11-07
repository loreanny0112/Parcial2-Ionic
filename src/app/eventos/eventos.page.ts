import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage {
  fecha: string = '';
  titulo: string = '';
  descripcion: string = '';

  constructor() { }

  guardar(){
    const data = {
      fecha: this.fecha,
      titulo: this.titulo,
      descripcion: this.descripcion
    }
    const key = 'formularioData_' + Date.now();

    this.guardarEnLocalStorage (key, data);

    this.fecha = '';
    this.titulo = '';
    this.descripcion = '';
  };


  guardarEnLocalStorage(key: string, data: any){
    localStorage.setItem(key, JSON.stringify(data));
  }




}
