import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tempteacherapply1Page } from '../tempteacherapply1/tempteacherapply1';

/**
 * Generated class for the Tempteacher1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tempteacher1',
  templateUrl: 'tempteacher1.html',
})
export class Tempteacher1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tempteacher1Page');
  }
  
  goBack(){
  	this.navCtrl.push(Tempteacherapply1Page);
  }
  
  public fromdate = {
    month: ''
  }
  public todate = {
    month: ''
  }

}
