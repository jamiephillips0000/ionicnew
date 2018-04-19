import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListofassignmentsStudentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listofassignments-student',
  templateUrl: 'listofassignments-student.html',
})
export class ListofassignmentsStudentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListofassignmentsStudentPage');
  }
   /*gotoprivacy(){
     this.navCtrl.push(PrivacyPage);
  }*/

}
