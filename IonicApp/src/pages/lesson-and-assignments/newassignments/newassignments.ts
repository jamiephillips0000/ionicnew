import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import {Classuploadfile} from './additems';
import {Classquestion} from './additems';
import {CKEditorModule} from 'ng2-ckeditor';

/**
 * Generated class for the NewassignmentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 declare function curriculumdemo(a);
 declare function subsectiondemo(a);

@IonicPage()
@Component({
  selector: 'page-newassignments',
  templateUrl: 'newassignments.html',
})
export class NewassignmentsPage {
uploadfiles: Array<Classuploadfile>;
questions: Array<Classquestion>;

description:string="Text Example goes here";

curriculumselected:any={};
subsectionselected:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.uploadfiles = [];
   this.questions = [];
  }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewassignmentsPage');
	this.description="Text Example goes here";
  }
  
  savecurriculum(){
   var curriculumarray = [];
    for(var i in this.curriculumselected) {
        /*console.log(this.curriculumselected[i]);*/
        if(this.curriculumselected[i] == true) {
            curriculumarray.push(i);
			curriculumdemo(curriculumarray);
        }
		else{
			curriculumdemo(curriculumarray);
		}
    }
    console.log(curriculumarray);
  }
  
  mycurgroup='0';
  box = '0';
opencurgroupbox(){
 if(this.mycurgroup == '0'){
	this.mycurgroup='1';
	this.box = '0';
}
else
{
	this.mycurgroup = '0';
	this.box = '1';
}
}


  savesubsection(){
   var subsectionarray = [];
    for(var i in this.subsectionselected) {
        /*console.log(this.subsectionselected[i]);*/
        if(this.subsectionselected[i] == true) {
            subsectionarray.push(i);
			subsectiondemo(subsectionarray);
        }
		else{
			subsectiondemo(subsectionarray);
		}
    }
    console.log(subsectionarray);
  }
  
  mysubsection='0';

opensubsectionbox(){
 if(this.mysubsection == '0'){
	this.mysubsection='1';
	this.box = '0';
}
else
{
	this.mysubsection = '0';
	this.box = '1';
}
}

hidebox(){
 	 if(this.mysubsection == '1' && this.box == '1'){
		this.mysubsection = '0';
		this.box = '0';
	}
	else {
	    this.box = '1';
	}
}



addUploadfile(newfilename){
        let uploadfile = new Classuploadfile(newfilename);
        this.uploadfiles.push(uploadfile);
    }

    removeUploadfile(uploadfile){
        let index = this.uploadfiles.indexOf(uploadfile);
        this.uploadfiles.splice(index,1);
    }
	
addQuestion(questionname){
        let question = new Classquestion(questionname);
        this.questions.push(question);
    }

    removeQuestion(question){
        let index = this.questions.indexOf(question);
        this.questions.splice(index,1);
    }
	
public becomeactive = {
    month: ''
  }
 public duedate = {
    month: ''
  }
 public bydate = {
    month: ''
  }
  
}