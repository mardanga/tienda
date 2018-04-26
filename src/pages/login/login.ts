import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { UsuarioProvider } from '../../providers/index.providers';
import { CarritoPage } from '../index.paginas';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  activo = false
  correo: string = "";
  contrasena: string = "";

  constructor(public _us: UsuarioProvider, public viewCtrl:ViewController,     public modalCtrl: ModalController
  ) {
  }

  validarUsuario() {
    this._us.validarUsuario(this.correo, this.contrasena).subscribe(()=> {
      
      if(this._us.activo){
        this.cerrarDialogo();
        this.modalCtrl.create(CarritoPage).present();
      }
     });
    
  }

  cerrarDialogo() {
    this.viewCtrl.dismiss(false);
  }

}
