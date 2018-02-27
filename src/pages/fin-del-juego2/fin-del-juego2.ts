import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ElAsesinoPage } from '../el-asesino/el-asesino';
import {ListoPage} from '../listo/listo'

@Component({
  selector: 'page-fin-del-juego2',
  templateUrl: 'fin-del-juego2.html'
})
export class FinDelJuego2Page {
  nombres: any;
  numKillers: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombres = navParams.get('nombres');
    this.numKillers = navParams.get('numKillers');
  }
  goToElAsesino(params){
    if (!params) params = {};
    this.navCtrl.push(ElAsesinoPage);
  }
  goToListo(params){
    if (!params) params = {};
    this.navCtrl.push(ListoPage, {nombres: this.nombres, numKillers: this.numKillers})
  }
}
