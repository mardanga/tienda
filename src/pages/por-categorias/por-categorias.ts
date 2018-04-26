
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/index.providers';
import { ProductoPage } from '../index.paginas';


@Component({
  selector: 'page-por-categorias',
  templateUrl: 'por-categorias.html',
})
export class PorCategoriasPage {

  categoria: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _ps: ProductosProvider
  ) {
      this.categoria =  this.navParams.get('categoria');
      this._ps.cargarPorCategoria(this.categoria);
  }

  siguientePagina(evento) {
    this._ps.cargarPorCategoria(this.categoria).then(()=> {
      evento.complete();
    });

  }

  irDetalleProducto(producto){
    this.navCtrl.push(ProductoPage, {'producto': producto});
  }

}
