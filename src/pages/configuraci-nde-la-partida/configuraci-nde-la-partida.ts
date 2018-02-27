import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ConfiguraciNDeLaPartida2Page } from '../configuraci-nde-la-partida2/configuraci-nde-la-partida2';

@Component({
  selector: 'page-configuraci-nde-la-partida',
  templateUrl: 'configuraci-nde-la-partida.html'
})
export class ConfiguraciNDeLaPartidaPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  goToConfiguraciNDeLaPartida2(numPlayers,numKillers){
    if(numPlayers.value == '' || numKillers.value == ''){
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Tienes que especificar cuantos jugadores y asesinos',
        buttons: ['OK']
      });
      alert.present();
    }else{
      if(numPlayers.value / 2 <= numKillers.value){
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Damasiados asesinos...',
          buttons: ['OK']
        });
        alert.present();
      }else{
        this.navCtrl.push(ConfiguraciNDeLaPartida2Page, {numPlayers: numPlayers.value, numKillers: numKillers.value});
      }
    }
  }
}
