import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MathstudentPage } from './mathstudent';

@NgModule({
  declarations: [
    MathstudentPage,
  ],
  imports: [
    IonicPageModule.forChild(MathstudentPage),
  ],
})
export class MathstudentPageModule {}
