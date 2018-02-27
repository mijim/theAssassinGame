import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { ListoPage } from '../listo/listo';
@Component({
  selector: 'page-configuraci-nde-la-partida2',
  templateUrl: 'configuraci-nde-la-partida2.html'
})
export class ConfiguraciNDeLaPartida2Page {
  nombres: any;
  numPlayers: number;
  numKillers: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.nombres = [];
    this.numKillers = navParams.get('numKillers');
    this.numPlayers = navParams.get('numPlayers');
  }
  
  addPlayer(playerName){
    if(playerName.value != ""){
      this.nombres.push(playerName.value);
    }else{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Escribe un nombre!',
        buttons: ['OK']
      });
      alert.present();
    }
    playerName.value = "";
    if(this.nombres.length == this.numPlayers){
      this.navCtrl.push(ListoPage, {nombres: this.nombres, numKillers: this.numKillers});
    }
  }

}
