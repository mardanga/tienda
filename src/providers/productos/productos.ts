import { URL_SERVICIO } from '../../config/url';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductosProvider {

  pagina = 0;
  productos = [];
  constructor(public http: Http) {
    this.cargarTodos();
  }

  cargarTodos() {
  

    let url = URL_SERVICIO + "/productos/todos/" + this.pagina;
    
    let promesa = new Promise((resolve, reject)=>{
      this.http
      .get(url)
      .map(resp=> resp.json())
      .subscribe(data => {
        if(data.error){


        }
        else{
          let arreglo = this.agrupar(data.productos, 2);
          
          this.productos.push(...arreglo);
          this.pagina +=1;
        }
        resolve();
      });
      }
    );
    return promesa;
  }

  agrupar (arr, tamano: number) {
    let nuevoArreglo = [];
    for (let index = 0; index < arr.length; index += tamano) {
      nuevoArreglo.push(arr.slice(index, index + tamano));
    }
    return nuevoArreglo;
  }
    
}
