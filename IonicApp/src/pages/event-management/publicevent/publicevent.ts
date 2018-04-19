import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';

/**
 * Generated class for the PubliceventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 declare function invitedemo(a);
 declare function inviteviaemaildemo(a);

@IonicPage()
@Component({
  selector: 'page-publicevent',
  templateUrl: 'publicevent.html',
})
export class PubliceventPage {

inviteselected:any={};
inviteviaemailselected:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PubliceventPage');
	
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
			invitedemo(invitearray);
        }
		else{
		invitedemo(invitearray);
		}
    }
    console.log(invitearray);
  }
  
myinviteviaemail='0';
openinviteviaemailbox(){
 if(this.myinviteviaemail == '0'){
this.myinviteviaemail='1';
}
else
{
	this.myinviteviaemail = '0';
}
}
saveinviteviaemail(){
   var inviteviaemailarray = [];
    for(var i in this.inviteviaemailselected) {
        /*console.log(this.inviteviaemailselected[i]);*/
        if(this.inviteviaemailselected[i] == true) {
            inviteviaemailarray.push(i);
			inviteviaemaildemo(inviteviaemailarray);
        }
		else{
		inviteviaemaildemo(inviteviaemailarray);
		}
    }
    console.log(inviteviaemailarray);
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