import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';

/**
 * Generated class for the TeacherUserprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-userprofile',
  templateUrl: 'teacher-userprofile.html',
})
export class TeacherUserprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherUserprofilePage');								
  }
 /* gotoaddstudentinfo(){
     this.navCtrl.push(AddstudentinfoPage);
  }
  */
  
   public birthday = {
    month: ''
  }
  
}
