import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhonenumberisverifiedPage } from '../phonenumberisverified/phonenumberisverified';

/**
 * Generated class for the ConfirmphonenumberPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmphonenumber',
  templateUrl: 'confirmphonenumber.html',
})
export class ConfirmphonenumberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmphonenumberPage');
  }
  gotophonenumberisverified(){
     this.navCtrl.push(PhonenumberisverifiedPage);
  }

}
