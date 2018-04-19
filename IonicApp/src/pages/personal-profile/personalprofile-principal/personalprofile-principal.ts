import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';

/**
 * Generated class for the PersonalprofilePrincipalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personalprofile-principal',
  templateUrl: 'personalprofile-principal.html',
})
export class PersonalprofilePrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalprofilePrincipalPage');								
  }
 /* gotoaddstudentinfo(){
     this.navCtrl.push(AddstudentinfoPage);
  }
  */
  
   public birthday = {
    month: ''
  }
  
}
