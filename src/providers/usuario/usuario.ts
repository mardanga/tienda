import { Injectable } from '@angular/core';
import {URLSearchParams, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { URL_SERVICIO } from '../../config/url';
import { AlertController, Platform } from 'ionic-angular';


@Injectable()
export class UsuarioProvider {

  idUsuario: string;;
  token:string ="";
  activo = false;

  constructor(public alertCtrl: AlertController, public http: Http, public platform: Platform) {
    
  }

  validarUsuario(correo: string, clave: string) {
    
    let data = new URLSearchParams();
    data.append('correo', correo);
    data.append('contrasena', clave);
    
    let url = URL_SERVICIO + "/login";
    
    return this.http.post(url, data).map(res=> {
      let data = res.json();
      if(data.error){
        this.alertCtrl.create({
          title:"Inicio Sesion",
          message: data.mensaje,
          buttons: ['OK']
        }).present();
      }
      else{
        this.idUsuario = data.id_usuario;
        this.token = data.token;
        this.activo= true;
        this.guardarStorage();
      }
    });

  }

  cerrarSesion() {
    this.idUsuario = null;
    this.token ="";
    this.activo = false;
    this.guardarStorage();
  }

  guardarStorage() {
    if(this.platform.is('cordova')){

    }
    else
    {
      localStorage.setItem('token', JSON.stringify(this.token));
      localStorage.setItem('idUsuario', JSON.stringify(this.idUsuario));
    }
  }

  cargarStorage() {
    if(this.platform.is('cordova')){

    }
    else
    {
      if(localStorage.getItem('token')){
        this.token = localStorage.getItem('token');
        this.idUsuario = localStorage.getItem('idUsuario');
        
        this.activo = true;
      }
      
    }
  }

}
