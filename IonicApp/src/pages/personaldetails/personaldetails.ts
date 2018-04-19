import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FamilyregisterPage } from '../familyregister/familyregister';

/**
 * Generated class for the PersonaldetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personaldetails',
  templateUrl: 'personaldetails.html',
})
export class PersonaldetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonaldetailsPage');
  }
  gotofamilyregister(){
     this.navCtrl.push(FamilyregisterPage);
  }

}
