import { Component, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuickactionRolecallPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quickaction-rolecall',
  templateUrl: 'quickaction-rolecall.html',
})
export class QuickactionRolecallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuickactionRolecallPage');
  }
    

year1div='0';
downarrow1 = '1';
uparrow1 = '1';
showyear1(){
if(this.year1div == '0'){
this.year1div ='1';
this.downarrow1 = '0';
this.uparrow1 = '0';
}
else{
this.year1div='0';
this.downarrow1 = '1';
this.uparrow1 = '1';
	}
}

/* @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.myVar == '1') {
	alert("das")
     // this.myVar='0';
    }
	}*/
}
