import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PermissionTypeaheadPage } from './permission-typeahead';

@NgModule({
  declarations: [
    PermissionTypeaheadPage,
  ],
  imports: [
    IonicPageModule.forChild(PermissionTypeaheadPage),
  ],
})
export class PermissionTypeaheadPageModule {}
