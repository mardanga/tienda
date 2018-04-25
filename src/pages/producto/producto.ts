
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/index.providers';

@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
  
  producto: any;

  constructor(public navParam: NavParams) {
    this.producto = this.navParam.get('producto');
  }

  

}
