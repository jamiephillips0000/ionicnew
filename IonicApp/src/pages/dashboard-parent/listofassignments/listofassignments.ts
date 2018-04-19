import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewassignmentsPage } from '../../lesson-and-assignments/newassignments/newassignments';

/**
 * Generated class for the ListofassignmentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listofassignments',
  templateUrl: 'listofassignments.html',
})
export class ListofassignmentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListofassignmentsPage');
  }
   gonewassignments(){
     this.navCtrl.push(NewassignmentsPage);
  }

}
