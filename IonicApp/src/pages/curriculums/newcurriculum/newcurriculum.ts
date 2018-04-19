import { Component, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListofactivecurriculumPage } from '../listofactivecurriculum/listofactivecurriculum';
import { AddclassPage } from '../addclass/addclass';

/**
 * Generated class for the NewcurriculumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newcurriculum',
  templateUrl: 'newcurriculum.html',
})
export class NewcurriculumPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewcurriculumPage');
  }
  
  goBack(){
  	this.navCtrl.push(ListofactivecurriculumPage);
  }
  
  addclasspage(){
  	this.navCtrl.push(AddclassPage);
  }

}
