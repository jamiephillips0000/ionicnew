import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { InboxPage } from '../inbox';

/**
 * Generated class for the InboxlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-inboxlist',
  templateUrl: 'inboxlist.html',
 host: {
    '[style.height.px]':'height'
  }
})
export class InboxlistPage {
 height: number;
 width : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.height = window.innerHeight;
	this.width = window.innerWidth;
	
	if(this.width<768){
		
	}
	else{
		this.navCtrl.push(InboxPage);
	}
  		
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxlistPage');
  }
   /*gotoprivacy(){
     this.navCtrl.push(PrivacyPage);
  }*/
  
  

inboxlist = '1';
chatlist = '0';
showchat(){
if(this.chatlist == '0'){
	this.chatlist='1';
	this.inboxlist = '0';
}
}
}
