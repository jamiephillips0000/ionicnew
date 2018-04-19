import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';

/**
 * Generated class for the InvitePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
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

year2div='0';
downarrow2 = '1';
uparrow2 = '1';
showyear2(){
if(this.year2div == '0'){
this.year2div ='1';
this.downarrow2 = '0';
this.uparrow2 = '0';
}
else{
this.year2div='0';
this.downarrow2 = '1';
this.uparrow2 = '1';
	}
}

year3div='0';
downarrow3 = '1';
uparrow3 = '1';
showyear3(){
if(this.year3div == '0'){
this.year3div ='1';
this.downarrow3 = '0';
this.uparrow3 = '0';
}
else{
this.year3div='0';
this.downarrow3 = '1';
this.uparrow3 = '1';
	}
}

year4div='0';
downarrow4 = '1';
uparrow4 = '1';
showyear4(){
if(this.year4div == '0'){
this.year4div ='1';
this.downarrow4 = '0';
this.uparrow4 = '0';
}
else{
this.year4div='0';
this.downarrow4 = '1';
this.uparrow4 = '1';
	}
}

}
