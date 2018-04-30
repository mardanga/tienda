import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CarritoProvider } from '../../providers/index.providers';

/**
 * Generated class for the CarritoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {

  constructor(public _cs: CarritoProvider, public viewCtrl: ViewController) {
  }

  cerrarCarrito() {
  this.viewCtrl.dismiss();
  }

  quitarProducto(idx) {
    this._cs.quitarProducto(idx);
  }

  enviarOrden() {
    this._cs.realizarPedido().subscribe();
  }
}
