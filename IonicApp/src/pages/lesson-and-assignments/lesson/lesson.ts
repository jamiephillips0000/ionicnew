import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import {Classsection} from './additems';

/**
 * Generated class for the LessonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 declare function assigneesdemo(a);

@IonicPage()
@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
})
export class LessonPage {

sections: Array<Classsection>;


assigneesselected:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.sections = [];
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonPage');
  }
  

   
myassignees='0';
box = '0';
openassigneesbox(){
if(this.myassignees == '0'){
	this.myassignees = '1';
	this.box = '0';
}
else
{
	this.myassignees = '0';
	this.box = '1'; 
}
}

hidebox(){
	if(this.myassignees == '1' && this.box == '1'){
		this.myassignees = '0';
		this.box = '0'; 
	}
	else {
	    this.box = '1';
	}
}


saveassignees(){
   var assigneesarray = [];
    for(var i in this.assigneesselected) {
        /*console.log(this.assigneesselected[i]);*/
        if(this.assigneesselected[i] == true) {
            assigneesarray.push(i);
			assigneesdemo(assigneesarray);
        }
		else{
		assigneesdemo(assigneesarray);
		}
    }
    console.log(assigneesarray);
  }


addSection(sectionname){
        let section = new Classsection(sectionname);
        this.sections.push(section);
    }

removeSection(section){
		let index = this.sections.indexOf(section);
		this.sections.splice(index,1);
	}
  
}