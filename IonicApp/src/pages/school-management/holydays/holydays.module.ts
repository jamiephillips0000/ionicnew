import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HolydaysPage } from './holydays';

@NgModule({
  declarations: [
    HolydaysPage,
  ],
  imports: [
    IonicPageModule.forChild(HolydaysPage),
  ],
})
export class HolydaysPageModule {}
