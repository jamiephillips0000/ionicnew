import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListofteachersPrincipalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listofteachers-principal',
  templateUrl: 'listofteachers-principal.html',
})
export class ListofteachersPrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListofteachersPrincipalPage');
  }
   /*gotoprivacy(){
     this.navCtrl.push(PrivacyPage);
  }*/

}
