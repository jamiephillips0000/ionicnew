import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';

/**
 * Generated class for the PrincipalUserprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal-userprofile',
  templateUrl: 'principal-userprofile.html',
})
export class PrincipalUserprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalUserprofilePage');								
  }
 /* gotoaddstudentinfo(){
     this.navCtrl.push(AddstudentinfoPage);
  }
  */
  
   public birthday = {
    month: ''
  }
  
}
