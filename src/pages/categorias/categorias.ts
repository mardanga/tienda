import { PorCategoriasPage } from './../por-categorias/por-categorias';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/index.providers';



@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  
  constructor(public navCtrl: NavController, public _ps: ProductosProvider) {
    console.log(_ps.lineas);
    console.log("categorias loades");
    
  }

  detalleCategoria(categoria) {
    this.navCtrl.push(PorCategoriasPage, {'categoria': categoria});
  }

}
