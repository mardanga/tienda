import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarritoProvider } from '../../providers/index.providers';
import { OrdenesDetallePage } from '../index.paginas';


@Component({
  selector: 'page-ordenes',
  templateUrl: 'ordenes.html',
})
export class OrdenesPage {

  ordenesDetalle = OrdenesDetallePage;

  constructor(public navCtrl: NavController, public _cs:CarritoProvider) {
  }
  
  ionViewWillEnter(){
    this._cs.obtenerOrdenes();
    console.log(this._cs.ordenes)
  }

  
  

}
