import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickactionPage } from './quickaction';
//import { PanicPage } from './panic';

@NgModule({
  declarations: [
    QuickactionPage,
	
  ],
  imports: [
    IonicPageModule.forChild(QuickactionPage),
	
  ],
})
export class QuickactionPageModule {}
