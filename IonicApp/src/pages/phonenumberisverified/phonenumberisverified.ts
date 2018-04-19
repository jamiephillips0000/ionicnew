import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TermsofusePage } from '../termsofuse/termsofuse';

/**
 * Generated class for the PhonenumberisverifiedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phonenumberisverified',
  templateUrl: 'phonenumberisverified.html',
})
export class PhonenumberisverifiedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhonenumberisverifiedPage');
  }
  gototermofuse(){
     this.navCtrl.push(TermsofusePage);
  }

}
