import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddschoolPage } from '../addschool/addschool';

/**
 * Generated class for the ListofactiveschoolPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listofactiveschool',
  templateUrl: 'listofactiveschool.html',
})
export class ListofactiveschoolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListofactiveschoolPage');
  }
   gotoaddschool(){
     this.navCtrl.push(AddschoolPage);
  }

}
