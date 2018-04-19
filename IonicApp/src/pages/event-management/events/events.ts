import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { PubliceventPage } from '../publicevent/publicevent';
import { PrivateeventPage } from '../privateevent/privateevent';

/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }
  
   gotoprivateevent(){
     this.navCtrl.push(PrivateeventPage);
  }
   gotopublicevent(){
     this.navCtrl.push(PubliceventPage);
  }
  
   myVar='0';

openbox(){
 if(this.myVar == '0'){
this.myVar='1';
}
else
{
	this.myVar = '0';
}
}

 
}
