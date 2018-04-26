import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController, Platform } from 'ionic-angular';


@Injectable()
export class CarritoProvider {

  items = [];
  totalCompra = 0;
  constructor(public alertCtrl: AlertController, public platform: Platform) {
    
  }

  agregarItem(item) {
    let existe = false;
    this.items.forEach(element => {

      if(element.codigo === item.codigo)
      {
        console.log(element.codigo , item.codigo);
        this.alertCtrl.create({
          title:"Carrito",
          message: "Ese producto ya esta agregado.",
          buttons: ['OK']
        }).present();
        existe = true;
      }
    });
    
    if(!existe){
      this.items.push(item);
      this.guardarStorage();
      
    }
  }

  guardarStorage() {
    if(this.platform.is('cordova')){

    }
    else
    {
      localStorage.setItem('carrito', JSON.stringify(this.items));
    }
    this.totalCompraItems();
  }

  cargarStorage() {
    if(this.platform.is('cordova')){

    }
    else
    {
      if(localStorage.getItem('carrito')){
        this.items = JSON.parse(localStorage.getItem('carrito'));
      }
    }
    this.totalCompraItems();
  }

  private totalCompraItems() {
    this.items.forEach(element => {
      this.totalCompra += parseFloat(element.precio_compra);
      
    });

  }

}
