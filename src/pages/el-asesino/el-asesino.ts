import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfiguraciNDeLaPartidaPage } from '../configuraci-nde-la-partida/configuraci-nde-la-partida';
import { ConfiguraciNDeLaPartida2Page } from '../configuraci-nde-la-partida2/configuraci-nde-la-partida2';

@Component({
  selector: 'page-el-asesino',
  templateUrl: 'el-asesino.html'
})
export class ElAsesinoPage {

  constructor(public navCtrl: NavController) {
  }
  goToConfiguraciNDeLaPartida(params){
    if (!params) params = {};
    this.navCtrl.push(ConfiguraciNDeLaPartidaPage);
  }goToConfiguraciNDeLaPartida2(params){
    if (!params) params = {};
    this.navCtrl.push(ConfiguraciNDeLaPartida2Page);
  }
}
