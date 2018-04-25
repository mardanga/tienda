
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

// servicios
import { 
  UsuarioProvider, 
  ProductosProvider, 
  CarritoProvider 
} from '../providers/index.providers';

// pages
import { 
  CarritoPage, 
  OrdenesDetallePage, 
  OrdenesPage, 
  LoginPage, 
  ProductoPage, 
  PorCategoriasPage, 
  CategoriasPage,
  TabsPage, 
  InicioPage } from '../pages/index.paginas';
  
import { ImagenPipe } from '../pipes/imagen/imagen';


@NgModule({
  declarations: [
    MyApp,
    CarritoPage, 
    OrdenesDetallePage, 
    OrdenesPage, 
    LoginPage, 
    ProductoPage, 
    PorCategoriasPage, 
    CategoriasPage,
    TabsPage,
    InicioPage,
    ImagenPipe
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CarritoPage, 
    OrdenesDetallePage, 
    OrdenesPage, 
    LoginPage, 
    ProductoPage, 
    PorCategoriasPage, 
    CategoriasPage,
    TabsPage,
    InicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarritoProvider,
    ProductosProvider,
    UsuarioProvider
  ]
})
export class AppModule {}
