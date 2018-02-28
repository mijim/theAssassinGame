import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import {FinDelJuegoPage} from '../fin-del-juego/fin-del-juego';
import {FinDelJuego2Page} from '../fin-del-juego2/fin-del-juego2';
@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html'
})
export class JuegoPage {
  players: any;
  playersId : any;
  killers: any;
  numKillers: number;
  numKillersTotal: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.numKillersTotal = navParams.get('numKillers');
    this.players = navParams.get('nombres');
    this.playersId = [];
    for(let index = 0; index < this.players.length; index++){
      this.playersId.push({id: index, name: this.players[index]});
    }
    this.killers = navParams.get('killers');
    this.numKillers = navParams.get('numKillers');
  }

  kill(index, playerIndex){
    console.log(index);
    console.log(playerIndex);
    this.playersId.splice(index, 1);
    if(this.killers[playerIndex] == 0){
      if(this.playersId.length / 2 <= this.numKillers){
        this.navCtrl.push(FinDelJuegoPage, {nombres : this.players, numKillers : this.numKillersTotal});
      }else{
        let alert = this.alertCtrl.create({
          title: 'Oh, vaya...',
          subTitle: '...era pueblo.',
          buttons: ['Mmm, dejame continuar']
        });
        alert.present();
      }
      
    }else{
      this.numKillers -= 1;
      if(this.numKillers == 0){
        this.navCtrl.push(FinDelJuego2Page, {nombres : this.players, numKillers : this.numKillersTotal});
      }else{
        let alert = this.alertCtrl.create({
          title: 'Lo hemos conseguido,',
          subTitle: 'era asesino.',
          buttons: ['Seguir']
        });
        alert.present();
      }
    }
  }
  
}
