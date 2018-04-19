import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ParentaddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parentaddress',
  templateUrl: 'parentaddress.html',
})
export class ParentaddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentaddressPage');
  }
  
 /* goBack(){
  	this.navCtrl.push(TempteacherapplyPage);
  }*/

}
