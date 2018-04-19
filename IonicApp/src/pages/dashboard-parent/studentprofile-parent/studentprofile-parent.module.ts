import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentprofileParentPage } from './studentprofile-parent';

@NgModule({
  declarations: [
    StudentprofileParentPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentprofileParentPage),
  ],
})
export class StudentprofileParentPageModule {}
