import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuickactionBookEquipmentRoomPage } from './quickaction-book-equipment-room';

/**
 * Generated class for the QuickactionBookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quickaction-book',
  templateUrl: 'quickaction-book.html',
})
export class QuickactionBookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuickactionBookPage');
  }
  
  gotobookequipmentroom(){
  	this.navCtrl.push(QuickactionBookEquipmentRoomPage);
  }

}
