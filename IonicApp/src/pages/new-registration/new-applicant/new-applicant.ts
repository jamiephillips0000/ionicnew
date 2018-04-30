import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator} from '../../../validators/ageValidator';
/**
 * Generated class for the NewApplicantPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-applicant',
  templateUrl: 'new-applicant.html',
})
export class NewApplicantPage {
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
        firstname: ['', Validators.compose([Validators.required])],
        familyName : ['', Validators.compose([Validators.required])],
        ageAtStartOfyear : [0, Validators.compose([Validators.required, AgeValidator.isValid])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewApplicantPage');
  }
  save(){

  }

}
