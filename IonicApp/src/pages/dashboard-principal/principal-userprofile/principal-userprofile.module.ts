import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalUserprofilePage } from './principal-userprofile';

@NgModule({
  declarations: [
    PrincipalUserprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalUserprofilePage),
  ],
})
export class PrincipalUserprofilePageModule {}
