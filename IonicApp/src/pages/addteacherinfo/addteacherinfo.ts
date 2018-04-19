import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { AddstudentinfoPage } from '../addstudentinfo/addstudentinfo';

/**
 * Generated class for the AddteacherinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addteacherinfo',
  templateUrl: 'addteacherinfo.html',
})
export class AddteacherinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddteacherinfoPage');								
  }
  gotoaddstudentinfo(){
     this.navCtrl.push(AddstudentinfoPage);
  }
    public birthday = {
    month: ''
  }
  
}
