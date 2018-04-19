import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MathteacherParentPage } from './mathteacher-parent';

@NgModule({
  declarations: [
    MathteacherParentPage,
  ],
  imports: [
    IonicPageModule.forChild(MathteacherParentPage),
  ],
})
export class MathteacherParentPageModule {}
