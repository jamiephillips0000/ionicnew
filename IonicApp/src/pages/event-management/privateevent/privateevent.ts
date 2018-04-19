import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';

/**
 * Generated class for the PrivateeventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 declare function invitedemoprivateevent(a);

@IonicPage()
@Component({
  selector: 'page-privateevent',
  templateUrl: 'privateevent.html',
})
export class PrivateeventPage {

inviteselected:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateeventPage');
	
  }
   
myinvite='0';
openinvitebox(){
 if(this.myinvite == '0'){
this.myinvite='1';
}
else
{
	this.myinvite = '0';
}
}
saveinvite(){
   var invitearray = [];
    for(var i in this.inviteselected) {
        /*console.log(this.inviteselected[i]);*/
        if(this.inviteselected[i] == true) {
            invitearray.push(i);
			invitedemoprivateevent(invitearray);
        }
		else{
		invitedemoprivateevent(invitearray);
		}
    }
    console.log(invitearray);
  }
  
 
  public start = {
    month: '',
	timeStarts: ''
  }
 public end = {
    month: '',
	timeStarts: ''
  }
}