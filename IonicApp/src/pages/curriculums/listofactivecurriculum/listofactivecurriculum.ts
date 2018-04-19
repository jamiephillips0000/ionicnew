import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewcurriculumPage } from '../newcurriculum/newcurriculum';

/**
 * Generated class for the ListofactivecurriculumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listofactivecurriculum',
  templateUrl: 'listofactivecurriculum.html',
})
export class ListofactivecurriculumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListofactivecurriculumPage');
  }
   gotonewcurriculum(){
     this.navCtrl.push(NewcurriculumPage);
  }

}
