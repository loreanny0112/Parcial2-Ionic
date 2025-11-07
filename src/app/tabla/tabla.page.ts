import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage {
  formularioData: any [] = [];

  constructor() { }

  ionViewWillEnter(){
   this.obtenerDatosLocalStorage();
  }

  obtenerDatosLocalStorage(){
    const keys = Object.keys(localStorage);
    for (const key of keys){
      if (key.startsWith('formularioData_')) {
        const dataString = localStorage.getItem(key)
        if (dataString !== null) {
          const data = JSON.parse(dataString);
          this.formularioData.push(data);
        }
      }
    }
  }

}
