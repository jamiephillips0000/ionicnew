import { Component, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddclassPage } from '../addclass/addclass';
import { AddsubsectionPage } from '../addsubsection/addsubsection';

/**
 * Generated class for the AddsubjectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addsubject',
  templateUrl: 'addsubject.html',
})
export class AddsubjectPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddsubjectPage');
  }
  
  goBack(){
  	this.navCtrl.push(AddclassPage);
  }
gotoaddsubsection(){
	this.navCtrl.push(AddsubsectionPage);
}
  
subject1div='0';
downarrow1 = '1';
uparrow1 = '1';
subject1(){
if(this.subject1div == '0'){
this.subject1div ='1';
this.downarrow1 = '0';
this.uparrow1 = '0';
}
else{
this.subject1div='0';
this.downarrow1 = '1';
this.uparrow1 = '1';
	}
}

subject2div='0';
downarrow2 = '1';
uparrow2 = '1';
subject2(){
if(this.subject2div == '0'){
this.subject2div ='1';
this.downarrow2 = '0';
this.uparrow2 = '0';
}
else{
this.subject2div='0';
this.downarrow2 = '1';
this.uparrow2 = '1';
	}
}

subject3div='0';
downarrow3 = '1';
uparrow3 = '1';
subject3(){
if(this.subject3div == '0'){
this.subject3div ='1';
this.downarrow3 = '0';
this.uparrow3 = '0';
}
else{
this.subject3div='0';
this.downarrow3 = '1';
this.uparrow3 = '1';
	}
}

}
