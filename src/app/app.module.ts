import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

 
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {VentasPageModule} from '../pages/ventas/ventas.module';
import {ComprasPageModule} from '../pages/compras/compras.module';

import { HttpClientModule } from '@angular/common/http';
import { VentasSettingsPageModule } from '../pages/ventas-settings/ventas-settings.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    VentasPageModule,
    ComprasPageModule,
    HttpClientModule,
    VentasSettingsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
