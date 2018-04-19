import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudenteditmodePage } from './studenteditmode';

@NgModule({
  declarations: [
    StudenteditmodePage,
  ],
  imports: [
    IonicPageModule.forChild(StudenteditmodePage),
  ],
})
export class StudenteditmodePageModule {}
