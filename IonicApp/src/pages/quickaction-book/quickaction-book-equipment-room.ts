import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuickactionBookPage } from '../quickaction-book/quickaction-book';
import {Equipment} from './equipment';

/**
 * Generated class for the QuickactionBookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quickaction-book-equipment-room',
  templateUrl: 'quickaction-book-equipment-room.html',
})

export class QuickactionBookEquipmentRoomPage {
equipments: Array<Equipment>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.equipments = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuickactionBookEquipmentRoomPage');
  }
  
  addEquipment(equpmentname,equipmentcapacity){
        let equipment = new Equipment(equpmentname,equipmentcapacity);
        this.equipments.push(equipment);
    }

    removeEquipment(equipment){
        let index = this.equipments.indexOf(equipment);
        this.equipments.splice(index,1);
    }
  
  goBack(){
  	this.navCtrl.push(QuickactionBookPage);
  }

  public fromdate = {
    month: ''
  }
  public todate = {
    month: ''
  }
}
