import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobilestagePage } from './mobilestage';

@NgModule({
  declarations: [
    MobilestagePage,
  ],
  imports: [
    IonicPageModule.forChild(MobilestagePage),
  ],
})
export class MobilestagePageModule {}
