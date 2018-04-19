import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { TermsPage } from '../terms/terms';
import { HolydaysPage } from '../holydays/holydays';
import {Classmonday} from './additems';
import {Classtuesday} from './additems';
import {Classwednesday} from './additems';
import {Classthursday} from './additems';
import {Classfriday} from './additems';
import {Classsaturday} from './additems';
import {Classsunday} from './additems';
import {Classschoolclass} from './additems';

/**
 * Generated class for the AddyearsmobPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 declare function carriculumdemo(a);
 declare function languagedemo(a);
 declare function carriculumgroupdemo(a);

@IonicPage()
@Component({
  selector: 'page-addyearsmob',
  templateUrl: 'addyearsmob.html',
})
export class AddyearsmobPage {

mondays: Array<Classmonday>;
tuesdays: Array<Classtuesday>;
wednesdays: Array<Classwednesday>;
thursdays: Array<Classthursday>;
fridays: Array<Classfriday>;
saturdays: Array<Classsaturday>;
sundays: Array<Classsunday>;
schoolclasses: Array<Classschoolclass>;

carriculumselected:any={};
languageselected:any={};
carriculumgroupselected:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.mondays = [];
  this.tuesdays = [];
  this.wednesdays = [];
  this.thursdays = [];
  this.fridays = [];
  this.saturdays = [];
  this.sundays = [];
  this.schoolclasses = [];
  
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddyearsmobPage');
  }

gototerms(){
	this.navCtrl.push(TermsPage);
}

gotoholydays(){
	this.navCtrl.push(HolydaysPage);
}

savecarriculum(){
   var carriculumarray = [];
    for(var i in this.carriculumselected) {
        /*console.log(this.carriculumselected[i]);*/
        if(this.carriculumselected[i] == true) {
            carriculumarray.push(i);
			carriculumdemo(carriculumarray);
        }
		else{
		carriculumdemo(carriculumarray);
		}
    }
    console.log(carriculumarray);
  }
  
  savecarriculumgroup(){
   var carriculumgrouparray = [];
    for(var i in this.carriculumgroupselected) {
        /*console.log(this.carriculumgroupselected[i]);*/
        if(this.carriculumgroupselected[i] == true) {
            carriculumgrouparray.push(i);
			carriculumgroupdemo(carriculumgrouparray);
        }
		else{
		carriculumgroupdemo(carriculumgrouparray);
		}
    }
    console.log(carriculumgrouparray);
  }
  
 savelanguage(){
   var languagearray = [];
    for(var j in this.languageselected) {
        /*console.log(this.languageselected[i]);*/
        if(this.languageselected[j] == true) {
            languagearray.push(j);
			languagedemo(languagearray);
        }
		else{
		languagedemo(languagearray);
		}
    }
    console.log(languagearray);
  }
  
  
mondaydiv='0';
showmondaydiv(){
if(this.mondaydiv == '0'){
this.mondaydiv ='1';}
else{
this.mondaydiv='0';
	}
}

 tuesdaydiv='0';
showtuesdaydiv(){
if(this.tuesdaydiv == '0'){
this.tuesdaydiv ='1';}
else{
this.tuesdaydiv='0';
	}
}

 wednesdaydiv='0';
showwednesdaydiv(){
if(this.wednesdaydiv == '0'){
this.wednesdaydiv ='1';}
else{
this.wednesdaydiv='0';
	}
}

 thursdaydiv='0';
showthursdaydiv(){
if(this.thursdaydiv == '0'){
this.thursdaydiv ='1';}
else{
this.thursdaydiv='0';
	}
}

 fridaydiv='0';
showfridaydiv(){
if(this.fridaydiv == '0'){
this.fridaydiv ='1';}
else{
this.fridaydiv='0';
	}
}

 saturdaydiv='0';
showsaturdaydiv(){
if(this.saturdaydiv == '0'){
this.saturdaydiv ='1';}
else{
this.saturdaydiv='0';
	}
}

 sundaydiv='0';
showsundaydiv(){
if(this.sundaydiv == '0'){
this.sundaydiv ='1';}
else{
this.sundaydiv='0';
	}
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

myVarlang='0';

openlanguagebox(){
 if(this.myVarlang == '0'){
this.myVarlang='1';
}
else
{
	this.myVarlang = '0';
}
}

mycurgroup='0';

opencurgroupbox(){
 if(this.mycurgroup == '0'){
this.mycurgroup='1';
}
else
{
	this.mycurgroup = '0';
}
}


 addMonday(newclass,newitem1,newitem2){
        let monday = new Classmonday(newclass,newitem1,newitem2);
        this.mondays.push(monday);
    }

    removeMonday(monday){
        let index = this.mondays.indexOf(monday);
        this.mondays.splice(index,1);
    }
	

 addTuesday(newclasstuesday,newitem1tuesday,newitem2tuesday){
        let tuesday = new Classtuesday(newclasstuesday,newitem1tuesday,newitem2tuesday);
        this.tuesdays.push(tuesday);
    }

    removeTuesday(tuesday){
        let index = this.tuesdays.indexOf(tuesday);
        this.tuesdays.splice(index,1);
    }
	
	 
addWednesday(newclasswednesday,newitem1wednesday,newitem2wednesday){
        let wednesday = new Classwednesday(newclasswednesday,newitem1wednesday,newitem2wednesday);
        this.wednesdays.push(wednesday);
    }

    removeWednesday(wednesday){
        let index = this.wednesdays.indexOf(wednesday);
        this.wednesdays.splice(index,1);
    }
	
addThursday(newclassthursday,newitem1thursday,newitem2thursday){
        let thursday = new Classthursday(newclassthursday,newitem1thursday,newitem2thursday);
        this.thursdays.push(thursday);
    }

    removeThursday(thursday){
        let index = this.thursdays.indexOf(thursday);
        this.thursdays.splice(index,1);
    }
	
addFriday(newclassfriday,newitem1friday,newitem2friday){
        let friday = new Classfriday(newclassfriday,newitem1friday,newitem2friday);
        this.fridays.push(friday);
    }

    removeFriday(friday){
        let index = this.fridays.indexOf(friday);
        this.fridays.splice(index,1);
    }
	
addSaturday(newclasssaturday,newitem1saturday,newitem2saturday){
        let saturday = new Classsaturday(newclasssaturday,newitem1saturday,newitem2saturday);
        this.saturdays.push(saturday);
    }

    removeSaturday(saturday){
        let index = this.saturdays.indexOf(saturday);
        this.saturdays.splice(index,1);
    }
	
addSunday(newclasssunday,newitem1sunday,newitem2sunday){
        let sunday = new Classsunday(newclasssunday,newitem1sunday,newitem2sunday);
        this.sundays.push(sunday);
    }

    removeSunday(sunday){
        let index = this.sundays.indexOf(sunday);
        this.sundays.splice(index,1);
    }

addSchoolclass(classname){
        let schoolclass = new Classschoolclass(classname);
        this.schoolclasses.push(schoolclass);
    }

    removeSchoolclass(schoolclass){
        let index = this.schoolclasses.indexOf(schoolclass);
        this.schoolclasses.splice(index,1);
    }
	
	

}
