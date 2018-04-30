import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController, Platform } from 'ionic-angular';
import { URL_SERVICIO } from '../../config/url';
import { UsuarioProvider } from '../usuario/usuario';




@Injectable()
export class CarritoProvider {

  items = [];
  totalCompra = 0;
  ordenes = [];

  constructor(public alertCtrl: AlertController, 
    public platform: Platform,
    
    public http: Http,
    public _us: UsuarioProvider
  ) {
    
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
    this.totalCompra = 0;
    this.items.forEach(element => {
      this.totalCompra += parseFloat(element.precio_compra);
      
    });

  }

  quitarProducto(idx) {
    this.items.splice(idx, 1);
    this.guardarStorage();
  }

  realizarPedido() {
    let url = `${URL_SERVICIO}/pedidos/realizar_orden/${ this._us.token}/${this._us.idUsuario}` 
    
    let codigos: string[] = [];
    for (const item of this.items) {
      codigos.push(item.codigo)
    } 

    let data = new URLSearchParams();
    data.append("items", codigos.join(","));

    return this.http.post(url, data).map(res => {
      let dataRes:any = res;
      
      if(dataRes.error){
        this.alertCtrl.create({
          title:"Carrito",
          message: "Error: " + dataRes.mensaje,
          buttons: ['OK']
        }).present();
        
      }
      else{
        this.alertCtrl.create({
          title:"Carrito",
          message: "Orden realizada. Pronto nos comunicaremos con usted.",
          buttons: ['OK']
        }).present();
        
        this.items = [];
        this.guardarStorage();
        
      }
    })

  }

  obtenerOrdenes (){
    let url =  `${URL_SERVICIO}/pedidos/obtener_pedidos/${ this._us.token}/${this._us.idUsuario}` 
    
    let promesa = new Promise((resolve, reject)=>{
      this.http
      .get(url)
      .map(resp=> resp.json())
      .subscribe(data => {
        if(data.error){
        }
        else{
          this.ordenes = data.ordenes;
          
          
        }
        resolve();
      });
      }
    );
    return promesa;
  }
  
  eliminarOrden (idOrden) {
    let url =  `${URL_SERVICIO}/pedidos/borrar_pedido/${ this._us.token}/${this._us.idUsuario}/${idOrden}` 
    
    
    return  this.http
      .delete(url)
      .map(resp=> resp.json());
    
  }
}
