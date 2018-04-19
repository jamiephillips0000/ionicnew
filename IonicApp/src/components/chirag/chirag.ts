import { Component } from '@angular/core';

/**
 * Generated class for the ChiragComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'chirag',
  templateUrl: 'chirag.html'
})
export class ChiragComponent {

  text: string;

  constructor() {
    console.log('Hello ChiragComponent Component');
    this.text = 'Hello World';
  }

}
