import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { ApplicationsregisterPage } from '../applicationsregister/applicationsregister';

/**
 * Generated class for the AddstudentinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addstudentinfo',
  templateUrl: 'addstudentinfo.html',
})
export class AddstudentinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddstudentinfoPage');
	//loaddatepicker();			
  }
  
  gotoapplicationsregister(){
     this.navCtrl.push(ApplicationsregisterPage);
  }
  
   public event = {
    month: ''
  }
  public startdate1 = {
    month: ''
  }
  public enddate1 = {
    month: ''
  }
  public startdate2 = {
    month: ''
  }
  public enddate2 = {
    month: ''
  }

}
