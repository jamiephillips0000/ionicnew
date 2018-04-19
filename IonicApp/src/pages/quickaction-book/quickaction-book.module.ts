import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickactionBookPage } from './quickaction-book';

@NgModule({
  declarations: [
    QuickactionBookPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickactionBookPage),
  ],
})
export class QuickactionBookPageModule {}
