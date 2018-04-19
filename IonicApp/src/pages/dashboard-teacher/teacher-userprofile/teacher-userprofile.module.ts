import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherUserprofilePage } from './teacher-userprofile';

@NgModule({
  declarations: [
    TeacherUserprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherUserprofilePage),
  ],
})
export class TeacherUserprofilePageModule {}
