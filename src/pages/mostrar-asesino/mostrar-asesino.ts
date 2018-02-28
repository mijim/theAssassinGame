import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JuegoPage } from '../juego/juego';

@Component({
  selector: 'mostrar-asesino',
  templateUrl: 'mostrar-asesino.html'
})
export class MostrarAsesinoPage {
  
  //Core
  nombres : any;
  killers : any;
  numKillers : number;

  //View
  buttonText: string;
  nombreJugText: string;
  labelText: string;

  //Control
  numPlayer: number;
  show: boolean;

  constructor(public navCtrl: NavController, public navParams : NavParams) {
    this.nombres = navParams.get('nombres');
    this.killers = navParams.get('killers');
    this.numKillers = navParams.get('numKillers');
    this.buttonText = "Mostrar";
    this.nombreJugText = this.nombres[0];
    this.numPlayer = 0;
    this.show = true;
    this.labelText = "";
  }

  mostrarCarta(){
    if(this.numPlayer == this.nombres.length){
      this.numPlayer = 0;
      this.navCtrl.push(JuegoPage, {nombres: this.nombres, killers: this.killers, numKillers: this.numKillers});
    }
    if(this.show){
      this.show = false;
      if(this.killers[this.numPlayer] == 0){
        this.labelText = "Eres pueblo";
      }else{
        this.labelText = "Eres asesino";
      }
      this.numPlayer += 1;
      this.buttonText = "Ocultar";
    }else{
      this.show = true;
      this.labelText = "";
      this.buttonText = "Mostrar";
      this.nombreJugText = this.nombres[this.numPlayer];
    }
  }
}
