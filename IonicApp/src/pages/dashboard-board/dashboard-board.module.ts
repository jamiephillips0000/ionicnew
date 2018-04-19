import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardBoardPage } from './dashboard-board';

@NgModule({
  declarations: [
    DashboardBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardBoardPage),
  ],
})
export class DashboardBoardPageModule {}
