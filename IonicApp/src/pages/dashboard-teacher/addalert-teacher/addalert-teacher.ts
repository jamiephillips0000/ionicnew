import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonRangeSliderModule } from "ng2-ion-range-slider";

/**
 * Generated class for the AddalertTeacherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addalert-teacher',
  templateUrl: 'addalert-teacher.html',
})

export class AddalertTeacherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddalertTeacherPage');
  }
  
  public fromdate = {
    month: ''
  }
}
