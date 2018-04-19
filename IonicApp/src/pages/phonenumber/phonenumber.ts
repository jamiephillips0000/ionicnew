import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmphonenumberPage } from '../confirmphonenumber/confirmphonenumber';

/**
 * Generated class for the PhonenumberPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phonenumber',
  templateUrl: 'phonenumber.html',
})
export class PhonenumberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhonenumberPage');
  }
	gotoconfirmphonenumber(){
     this.navCtrl.push(ConfirmphonenumberPage);
  }

}
