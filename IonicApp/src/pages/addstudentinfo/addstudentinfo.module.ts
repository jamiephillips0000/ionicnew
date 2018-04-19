import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddstudentinfoPage } from './addstudentinfo';

@NgModule({
  declarations: [
    AddstudentinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddstudentinfoPage),
  ],
})
export class AddstudentinfoPageModule {}
