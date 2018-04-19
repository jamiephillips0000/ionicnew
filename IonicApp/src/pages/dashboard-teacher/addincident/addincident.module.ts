import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddincidentPage } from './addincident';

@NgModule({
  declarations: [
    AddincidentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddincidentPage),
  ],
})
export class AddincidentPageModule {}
