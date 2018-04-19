import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewcurriculumPage } from './newcurriculum';

@NgModule({
  declarations: [
    NewcurriculumPage,
  ],
  imports: [
    IonicPageModule.forChild(NewcurriculumPage),
  ],
})
export class NewcurriculumPageModule {}
