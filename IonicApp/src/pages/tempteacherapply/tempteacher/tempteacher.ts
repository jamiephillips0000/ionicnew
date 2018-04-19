import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TempteacherapplyPage } from '../tempteacherapply';

/**
 * Generated class for the TempteacherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tempteacher',
  templateUrl: 'tempteacher.html',
})
export class TempteacherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TempteacherPage');
  }
  
  goBack(){
  	this.navCtrl.push(TempteacherapplyPage);
  }
  
  public fromdate = {
    month: ''
  }
  public todate = {
    month: ''
  }

}
