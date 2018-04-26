import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InicioPage, CategoriasPage, OrdenesPage } from '../index.paginas';



@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 = InicioPage;
  tab2 = CategoriasPage;
  tab3 = OrdenesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

}
