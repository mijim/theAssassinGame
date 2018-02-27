import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ElAsesinoPage } from '../pages/el-asesino/el-asesino';
import { ConfiguraciNDeLaPartidaPage } from '../pages/configuraci-nde-la-partida/configuraci-nde-la-partida';
import { ConfiguraciNDeLaPartida2Page } from '../pages/configuraci-nde-la-partida2/configuraci-nde-la-partida2';
import { ListoPage } from '../pages/listo/listo';
import { JuegoPage } from '../pages/juego/juego';
import { FinDelJuegoPage } from '../pages/fin-del-juego/fin-del-juego';
import { FinDelJuego2Page } from '../pages/fin-del-juego2/fin-del-juego2';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ElAsesinoPage,
    ConfiguraciNDeLaPartidaPage,
    ConfiguraciNDeLaPartida2Page,
    ListoPage,
    JuegoPage,
    FinDelJuegoPage,
    FinDelJuego2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ElAsesinoPage,
    ConfiguraciNDeLaPartidaPage,
    ConfiguraciNDeLaPartida2Page,
    ListoPage,
    JuegoPage,
    FinDelJuegoPage,
    FinDelJuego2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}