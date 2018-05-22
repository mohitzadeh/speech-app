import { Component } from '@angular/core';

/**
 * Generated class for the SplashComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'splash',
  templateUrl: 'splash.html'
})
export class SplashComponent {

  text: string;

  constructor() {
    console.log('Hello SplashComponent Component');
    this.text = 'Hello World';
  }

}
