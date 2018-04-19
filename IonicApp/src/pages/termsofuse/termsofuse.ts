import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrivacyPage } from '../privacy/privacy';

/**
 * Generated class for the TermsofusePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-termsofuse',
  templateUrl: 'termsofuse.html',
})
export class TermsofusePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsofusePage');
  }
   gotoprivacy(){
     this.navCtrl.push(PrivacyPage);
  }

}
