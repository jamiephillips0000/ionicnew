import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';

/**
 * Generated class for the StudentviewmodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentviewmode',
  templateUrl: 'studentviewmode.html',
})
export class StudentviewmodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentviewmodePage');
			
  }
  
   public event = {
	month: '1990-02-20'
  }
  public startdate1 = {
   month: '1990-02-20'
  }
  public enddate1 = {
    month: '1990-02-20'
  }
  public startdate2 = {
    month: '1990-02-20'
  }
  public enddate2 = {
    month: '1990-02-20'
  }
   public fromdate1 = {
    month: '1990-02-20'
  }
   public todate1 = {
    month: '1990-02-20'
  }
  
 

}
