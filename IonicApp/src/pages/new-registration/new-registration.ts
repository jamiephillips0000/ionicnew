import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { Applicant } from "./applicant";
import { Application } from "./application";
import { NewApplicantPage } from './new-applicant/new-applicant';
/**
 * Generated class for the NewRegistrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-new-registration',
  templateUrl: 'new-registration.html',
})
export class NewRegistrationPage {

 application : Application ;
 applicants: Array<Applicant>;
 form: FormGroup;
 submitAttempt: boolean = false;
 parentSubmitAttempt :boolean = false;
 title : string = "";
 description : string = "";

 newItem : string = ""
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public toastCtrl: ToastController) {
    this.applicants = [];
    this.form = formBuilder.group({
        //newItem: ['', Validators.compose([Validators.email, Validators.required])],
        title: ['', Validators.compose([Validators.required])],
        description : ['', Validators.compose([Validators.required])]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRegistrationPage');
  }
  addApplicant(){
    this.navCtrl.push(NewApplicantPage);
  }
  submit(){
    this.submitAttempt = true;
    console.log("valid" + this.form.valid);
    if(this.form.valid){
      //this.applicants.push(new Applicant(this.newItem));
      this.newItem = "";
      this.form.reset();
      this.submitAttempt = false;
    }
  }
  delApplicant(idx){
		this.applicants.splice(idx,1);
  }
  goBack(){
    this.navCtrl.pop();
  }

  gotoAddApplicant(){
    //this.navCtrl.push(AddschoolPage);
  }
  gotoAddParentGuuardian(){
    //this.navCtrl.push(AddschoolPage);
  }
}
