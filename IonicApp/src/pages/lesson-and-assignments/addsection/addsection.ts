import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import {Classuploadfile} from './additems';
import {Classquestion} from './additems';
import {Classassignment} from './additems';
import {CKEditorModule} from 'ng2-ckeditor';

/**
 * Generated class for the AddsectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-addsection',
  templateUrl: 'addsection.html',
})
export class AddsectionPage {
uploadfiles: Array<Classuploadfile>;
questions: Array<Classquestion>;
assignments: Array<Classassignment>;

description:string="Text Example goes here";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.uploadfiles = [];
   this.questions = [];
   this.assignments = [];
  }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddsectionPage');
	this.description="Text Example goes here";
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
	
addAssignment(newassignmentname){
        let assignment = new Classassignment(newassignmentname);
        this.assignments.push(assignment);
    }

    removeAssignment(assignment){
        let index = this.assignments.indexOf(assignment);
        this.assignments.splice(index,1);
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