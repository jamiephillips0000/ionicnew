import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxlistPage } from './inboxlist';

@NgModule({
  declarations: [
    InboxlistPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxlistPage),
  ],
})
export class InboxlistPageModule {}
