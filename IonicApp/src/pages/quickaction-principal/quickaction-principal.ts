import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuickactionRolecallPage } from '../quickaction-rolecall/quickaction-rolecall';
import { PanicPage } from '../quickactions/panic';
import { AbsencePage } from '../quickactions/absence';

/**
 * Generated class for the QuickactionPrincipalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quickaction-principal',
  templateUrl: 'quickaction-principal.html',
})
export class QuickactionPrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuickactionPrincipalPage');
  }
  
  gotoquickactionrollcall(){
	this.navCtrl.push(QuickactionRolecallPage);
}
panic() {
	  this.navCtrl.setRoot(PanicPage);  
	  }
 absence() {
	  this.navCtrl.setRoot(AbsencePage);
		  
	  }

}
