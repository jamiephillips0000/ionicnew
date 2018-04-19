import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';

/**
 * Generated class for the AddroomPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
  declare function equipmentdemo(a);
  declare function equipment2demo(a);

@IonicPage()
@Component({
  selector: 'page-addroom',
  templateUrl: 'addroom.html',
})
export class AddroomPage {

equipment1selected:any={};
equipment2selected:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddroomPage');
  }
   /*gotoprivacy(){
     this.navCtrl.push(PrivacyPage);
  }*/
  
  myVarequipment1='0';

openequipment1box(){
 if(this.myVarequipment1 == '0'){
this.myVarequipment1='1';
}
else
{
	this.myVarequipment1 = '0';
}
}

saveequipment1(){
   var equipment1array = [];
    for(var i in this.equipment1selected) {
        /*console.log(this.equipment1selected[i]);*/
        if(this.equipment1selected[i] == true) {
            equipment1array.push(i);
			equipmentdemo(equipment1array);
        }
		else{
		equipmentdemo(equipment1array);
		}
    }
    console.log(equipment1array);
  }
  
  
  myVarequipment2='0';
  
 openequipment2box(){
 if(this.myVarequipment2 == '0'){
this.myVarequipment2='1';
}
else
{
	this.myVarequipment2 = '0';
}
}

saveequipment2(){
   var equipment2array = [];
    for(var j in this.equipment2selected) {
        /*console.log(this.equipment2selected[j]);*/
        if(this.equipment2selected[j] == true) {
            equipment2array.push(j);
			equipment2demo(equipment2array);
        }
		else{
		equipment2demo(equipment2array);
		}
    }
    console.log(equipment2array);
  }

}
