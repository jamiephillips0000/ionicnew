import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListofassignmentsLessonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listofassignments-lesson',
  templateUrl: 'listofassignments-lesson.html',
})
export class ListofassignmentsLessonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListofassignmentsLessonPage');
  }
   /*gotoprivacy(){
     this.navCtrl.push(PrivacyPage);
  }*/

}
