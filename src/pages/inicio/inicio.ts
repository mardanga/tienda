import { ProductoPage } from './../producto/producto';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/index.providers';



@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public _ps:ProductosProvider, 
    public navCtrl: NavController
  ) {
  }

  siguientePagina(evento) {
    this._ps.cargarTodos().then(()=> {
      evento.complete();
    });

  }

  irDetalleProducto(producto){
    this.navCtrl.push(ProductoPage, {'producto': producto});
  }
}
