

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductosProvider, CarritoProvider } from '../../providers/index.providers';

@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
  
  producto: any;

  constructor(public navParam: NavParams, public _cs: CarritoProvider) {
    this.producto = this.navParam.get('producto');
  }

  agregarCarrito() {
    this._cs.agregarItem(this.producto);
  }

}
