import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {enableProdMode} from '@angular/core';
import { MobilestagePage } from '../mobilestage/mobilestage';
import {Contact} from './contact';

/**
 * Generated class for the ListofequipmentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listofequipments',
  templateUrl: 'listofequipments.html',
})

export class ListofequipmentsPage {
contacts: Array<Contact>;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 	 this.contacts = [];
	 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListofequipmentsPage');
  }
  
  addContact(newequipment){
        let contact = new Contact(newequipment);
        this.contacts.push(contact);
    }

    removeContact(contact){
        let index = this.contacts.indexOf(contact);
        this.contacts.splice(index,1);
    }
	
	
   gotomobilestage(){
     this.navCtrl.push(MobilestagePage);
  }

}
