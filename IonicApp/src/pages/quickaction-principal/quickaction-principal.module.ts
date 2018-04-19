import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickactionPrincipalPage } from './quickaction-principal';

@NgModule({
  declarations: [
    QuickactionPrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickactionPrincipalPage),
  ],
})
export class QuickactionPrincipalPageModule {}
