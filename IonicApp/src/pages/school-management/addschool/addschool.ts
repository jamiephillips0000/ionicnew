import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { ListofactiveschoolPage } from '../listofactiveschool/listofactiveschool';
import { AddaddressPage } from '../addaddress/addaddress';

/**
 * Generated class for the AddschoolPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addschool',
  templateUrl: 'addschool.html',
})
export class AddschoolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddschoolPage');
  }
  
   goBack(){
     this.navCtrl.push(ListofactiveschoolPage);
  }
  gotoaddaddress(){
  	this.navCtrl.push(AddaddressPage);
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

}
