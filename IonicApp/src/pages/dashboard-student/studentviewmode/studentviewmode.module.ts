import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentviewmodePage } from './studentviewmode';

@NgModule({
  declarations: [
    StudentviewmodePage,
  ],
  imports: [
    IonicPageModule.forChild(StudentviewmodePage),
  ],
})
export class StudentviewmodePageModule {}
