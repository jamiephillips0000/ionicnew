import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhonenumberPage } from '../phonenumber/phonenumber';

/**
 * Generated class for the EmailisverifiedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emailisverified',
  templateUrl: 'emailisverified.html',
})
export class EmailisverifiedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailisverifiedPage');
  }
  gotophonenumber(){
     this.navCtrl.push(PhonenumberPage);
  }

}
