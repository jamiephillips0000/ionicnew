import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailisverifiedPage } from '../emailisverified/emailisverified';

/**
 * Generated class for the ConfirmemailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmemail',
  templateUrl: 'confirmemail.html',
})
export class ConfirmemailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmemailPage');
  }
   gotoemailisverified(){
     this.navCtrl.push(EmailisverifiedPage);
  }

}
