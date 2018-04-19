import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentaddressPage } from './parentaddress';

@NgModule({
  declarations: [
    ParentaddressPage,
  ],
  imports: [
    IonicPageModule.forChild(ParentaddressPage),
  ],
})
export class ParentaddressPageModule {}
