import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { InboxlistPage } from './inboxlist/inboxlist';

/**
 * Generated class for the InboxPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
 host: {
    '[style.height.px]':'height'
  }
})
export class InboxPage {
 height: number;
 width : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.height = window.innerHeight;
	this.width = window.innerWidth;
	
	if(this.width<768){
		//alert("mobile")
		this.navCtrl.push(InboxlistPage);
	}
	
  		
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }
   /*gotoprivacy(){
     this.navCtrl.push(PrivacyPage);
  }*/
  
 fontcolor1 = '#fff';
 fontcolor2 = '#fff';
 activecolor = '#673ab7';
 activecolor1 = '#eceff1';
 fontcolor3 = '#424242';
 fontcolor4 = '#78909c';
 
 title = 'Peret Smith';
 mychat1 = '1';
 mychat2 = '0';
 
 chat2(){
 	 this.fontcolor1 = '#424242';
	 this.fontcolor2 = '#78909c';
	 this.activecolor = '#eceff1';
	 this.activecolor1 = '#673ab7';
	 this.fontcolor3 = '#fff';
	 this.fontcolor4 = '#fff';
	 this.title = 'Mike Parker';
	 this.mychat1 = '0';
	 this.mychat2 = '1';
 }
 
 chat1(){
 	this.fontcolor1 = '#fff';
	 this.fontcolor2 = '#fff';
	 this.activecolor = '#673ab7';
	 this.activecolor1 = '#eceff1';
	 this.fontcolor3 = '#424242';
	 this.fontcolor4 = '#78909c';
	 this.title = 'Peret Smith';
	 this.mychat1 = '1';
	 this.mychat2 = '0';
 }

}
