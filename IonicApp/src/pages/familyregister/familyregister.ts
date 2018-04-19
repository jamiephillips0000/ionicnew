import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { AddteacherinfoPage } from '../addteacherinfo/addteacherinfo';
import { AddstudentinfoPage } from '../addstudentinfo/addstudentinfo';

/**
 * Generated class for the FamilyregisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-familyregister',
  templateUrl: 'familyregister.html',
})
export class FamilyregisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyregisterPage');
  }
  
  gotoaddstudentinfo(){
  	 this.navCtrl.push(AddstudentinfoPage);
  }
  gotoaddteacherinfo(){
  	 this.navCtrl.push(AddteacherinfoPage);
  }

}
