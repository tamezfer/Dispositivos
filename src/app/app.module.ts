import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { DispositivoPage } from '../pages/dispositivo/dispositivo';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { VideojuegosPage } from '../pages/videojuegos/videojuegos';
import { EmpleoPage } from '../pages/empleo/empleo';
import { InfoVideojuegoPage } from '../pages/info-videojuego/info-videojuego';
import { InfoEmpleoPage } from '../pages/info-empleo/info-empleo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DispositivoPage,
    FavoritosPage,
    TabsPage,
    SearchPage,
    VideojuegosPage,
    EmpleoPage,
    InfoVideojuegoPage,
    InfoEmpleoPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DispositivoPage,
    FavoritosPage,
    TabsPage,
    SearchPage,
    VideojuegosPage,
    EmpleoPage,
    InfoVideojuegoPage,
    InfoEmpleoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
