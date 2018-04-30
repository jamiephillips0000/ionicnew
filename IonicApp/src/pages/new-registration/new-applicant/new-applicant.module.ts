import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewApplicantPage } from './new-applicant';

@NgModule({
  declarations: [
    NewApplicantPage,
  ],
  imports: [
    IonicPageModule.forChild(NewApplicantPage),
  ],
})
export class NewApplicantPageModule {}
