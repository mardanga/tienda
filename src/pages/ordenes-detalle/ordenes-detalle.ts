import { CarritoProvider } from './../../providers/carrito/carrito';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrdenesDetallePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ordenes-detalle',
  templateUrl: 'ordenes-detalle.html',
})
export class OrdenesDetallePage {

  orden: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public _cs: CarritoProvider
  ) {
    this.orden = this.navParams.get('orden');
    
    
  }

  eliminarOrden(idOrden){
    this._cs.eliminarOrden(idOrden).subscribe(res=> {
      
        if(res.error){
        }
        else{
           this.navCtrl.pop(); 
          
          
        }
    });
  }
  

}
