import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';

/**
 * Generated class for the EquipmentshedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipmentshedule',
  templateUrl: 'equipmentshedule.html',
})
export class EquipmentshedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentshedulePage');
  }
   /*gotoprivacy(){
     this.navCtrl.push(PrivacyPage);
  }*/

public fromdate = {
    month: ''
  }
  public todate = {
    month: ''
  }

}
