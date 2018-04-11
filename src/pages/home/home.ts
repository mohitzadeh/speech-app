import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { Platform } from 'ionic-angular';
//import { StatusBar, Splashscreen } from 'ionic-native';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gototest(){
    this.navCtrl.push(TestPage)
  }
}
