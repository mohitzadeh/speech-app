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
    setTimeout(() => {
    //document.getElementById("splash").style.display = "none";
   // document.getElementById("content").style.display = "block";
    }, 1000);
  }


  gotoHomeHelpPage(){
    this.navCtrl.push(TestPage)
  }

  gotoHomeSettingPage(){
    this.navCtrl.push(TestPage)
  }
}
