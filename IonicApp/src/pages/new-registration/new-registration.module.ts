import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewRegistrationPage } from './new-registration';

@NgModule({
  declarations: [
    NewRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(NewRegistrationPage),
  ],
})
export class NewRegistrationPageModule {}
