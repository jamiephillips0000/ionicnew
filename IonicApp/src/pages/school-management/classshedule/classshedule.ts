import { Component, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClassshedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 declare function shedulecarriculumdemo(a);
 declare function sheduleequipmentdemo(a);
@IonicPage()
@Component({
  selector: 'page-classshedule',
  templateUrl: 'classshedule.html',
})
export class ClassshedulePage {
carriculumselected:any={};
equipment2selected:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassshedulePage');
  }
  
  public starttime = {
    timeStarts: '09:00'
  }
  public endtime = {
    timeStarts: '10:00'
  }
  

savecarriculum(){
   var carriculumarray = [];
    for(var i in this.carriculumselected) {
        /*console.log(this.carriculumselected[i]);*/
        if(this.carriculumselected[i] == true) {
            carriculumarray.push(i);
			shedulecarriculumdemo(carriculumarray);
        }
		else{
		}
    }
    console.log(carriculumarray);
  }
 
 myVarcur='0';

opencurriculumbox(){
 if(this.myVarcur == '0'){
this.myVarcur='1';
}
else
{
	this.myVarcur = '0';
}
}

 myVarequipment='0';
 openequipmentbox(){
 if(this.myVarequipment == '0'){
this.myVarequipment='1';
}
else
{
	this.myVarequipment = '0';
}
}

saveequipment(){
   var equipment2array = [];
    for(var j in this.equipment2selected) {
        /*console.log(this.equipment2selected[j]);*/
        if(this.equipment2selected[j] == true) {
            equipment2array.push(j);
			sheduleequipmentdemo(equipment2array);
        }
		else{
		}
    }
    console.log(equipment2array);
  }

}
