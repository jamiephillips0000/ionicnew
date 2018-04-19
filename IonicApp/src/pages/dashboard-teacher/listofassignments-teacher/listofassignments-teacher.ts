import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListofassignmentsTeacherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listofassignments-teacher',
  templateUrl: 'listofassignments-teacher.html',
})
export class ListofassignmentsTeacherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListofassignmentsTeacherPage');
  }
   /*gotoprivacy(){
     this.navCtrl.push(PrivacyPage);
  }*/

}
