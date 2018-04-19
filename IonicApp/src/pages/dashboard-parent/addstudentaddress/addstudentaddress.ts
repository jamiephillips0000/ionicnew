import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the AddstudentaddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addstudentaddress',
  templateUrl: 'addstudentaddress.html',
})
export class AddstudentaddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddstudentaddressPage');
  }
  
 /* goBack(){
  	this.navCtrl.push(TempteacherapplyPage);
  }*/

}
