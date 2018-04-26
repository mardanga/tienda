import { URL_SERVICIO } from '../../config/url';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductosProvider {

  pagina = 0;
  productos = [];
  lineas = [];
  paginaPorCategoria = 0;
  productosPorCategoria = [];
  private idCategoriaAux = 0;

  constructor(public http: Http) {
    this.cargarTodos();
    this.cargarLineas();
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
    
  cargarLineas() {
    let url = URL_SERVICIO + "/lineas";
    let promesa = new Promise((resolve, reject)=>{
      this.http
      .get(url)
      .map(resp=> resp.json())
      .subscribe(data => {
        if(data.error){
        }
        else{
          this.lineas.push(...data.lineas);
          
        }
        resolve();
      });
      }
    );
    return promesa;
  }

  cargarPorCategoria(categoria) {
  
    if(this.idCategoriaAux != categoria.id)
    {
      this.paginaPorCategoria = 0;
      this.productosPorCategoria =[];
      this.idCategoriaAux = categoria.id;
    }
    
    
    
    let url = URL_SERVICIO + "/productos/por_tipo/" + categoria.id + "/" + this.paginaPorCategoria;
    console.log(this.paginaPorCategoria, url);
    let promesa = new Promise((resolve, reject)=>{
      this.http
      .get(url)
      .map(resp=> resp.json())
      .subscribe(data => {
        if(data.error){
        }
        else{
          
          this.productosPorCategoria.push(...data.productos);
          console.log(this.productosPorCategoria);
          
          this.paginaPorCategoria +=1;
        }
        resolve();
      });
      }
    );
    return promesa;
  }
}
