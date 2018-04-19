import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the InvitationtoregisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare function demo(a);
@IonicPage()



@Component({
  selector: 'page-invitationtoregister',
  templateUrl: 'invitationtoregister.html',
})

export class InvitationtoregisterPage {
friendsSelected:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitationtoregisterPage');
  }
  gotoregister(){
     this.navCtrl.push(RegisterPage);
  }

 save(){
   var array = [];
    for(var i in this.friendsSelected) {
        /*console.log(this.friendsSelected[i]);*/
        if(this.friendsSelected[i] == true) {
            array.push(i);
			demo(array);
			
        }
		else{
		
		
		}
    }
    console.log(array);
  }
}
