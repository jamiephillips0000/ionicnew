import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { LogincidentPage } from '../logincident/logincident';

/**
 * Generated class for the ApplicationsregisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-applicationsregister',
  templateUrl: 'applicationsregister.html',
})
export class ApplicationsregisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplicationsregisterPage');
  }
  
 year:any;
myVar1='0';

openselectbox2(){
this.myVar1='1';
}
	
onSelectionChange1(years){

 this.year = years;
 this.myVar1='0';

}


subdiv1='0';
downarrow = '1';
uparrow = '1';
opensubdiv1(){
if(this.subdiv1 == '0'){
this.subdiv1 ='1';
this.downarrow = '0';
this.uparrow = '0';
}
else{
this.subdiv1='0';
this.downarrow = '1';
this.uparrow = '1';
	}
}

subdiv2='0';
downarrow1 = '1';
uparrow1 = '1';
opensubdiv2(){
if(this.subdiv2 == '0'){
this.subdiv2 ='1';
this.downarrow1 = '0';
this.uparrow1 = '0';
}
else{
this.subdiv2='0';
this.downarrow1 = '1';
this.uparrow1 = '1';
	}
}

}
