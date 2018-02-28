import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MostrarAsesinoPage } from '../mostrar-asesino/mostrar-asesino';

@Component({
  selector: 'page-listo',
  templateUrl: 'listo.html'
})
export class ListoPage {
  
  nombres : any;
  killers : any;
  numKillers : number;

  constructor(public navCtrl: NavController, public navParams : NavParams) {
    this.nombres = navParams.get('nombres');
    this.numKillers = navParams.get('numKillers');
    this.killers = [];
    this.setRandomKillers();
    console.log(this.killers);
  }

  setRandomKillers(){
    for (let index = 0; index < this.nombres.length; index++) {
      this.killers.push(0);
    }

    let index = 0
    while(index < this.numKillers){
      let number = Math.floor((Math.random() * this.nombres.length));
      if(this.killers[number] == 0){
        this.killers[number] = 1;
        index += 1;
      }
    }
  }

  goToJuego(params){
    if (!params) params = {};
    this.navCtrl.push(MostrarAsesinoPage, {nombres: this.nombres, killers: this.killers, numKillers: this.numKillers});
  }
}
