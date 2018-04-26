


import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductosProvider, CarritoProvider, UsuarioProvider } from '../../providers/index.providers';
import { ProductoPage, LoginPage, CarritoPage } from '../index.paginas';



@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public _ps:ProductosProvider, 
    public navCtrl: NavController,
    public _cs: CarritoProvider,
    public _us: UsuarioProvider,
    public modalCtrl: ModalController
  ) {
    this._cs.cargarStorage();
    this._us.cargarStorage();
  }

  siguientePagina(evento) {
    this._ps.cargarTodos().then(()=> {
      evento.complete();
    });

  }

  irDetalleProducto(producto){
    this.navCtrl.push(ProductoPage, {'producto': producto});
  }

  verCarrito() {
    let modal: any;
    if(this._us.activo)
    {
      //ver carrito
      modal = this.modalCtrl.create(CarritoPage);
    }
    else
    {
      //ver login
      modal = this.modalCtrl.create(LoginPage);
    }
    
    modal.present();


  }

  cerrarSesion() {
    this._us.cerrarSesion();
  }
  
}
