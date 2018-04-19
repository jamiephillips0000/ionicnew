import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TempteacherPage } from '../tempteacherapply/tempteacher/tempteacher';
import {Classsubject} from './additems';

/**
 * Generated class for the TempteacherapplyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tempteacherapply',
  templateUrl: 'tempteacherapply.html',
})
export class TempteacherapplyPage {
subjects: Array<Classsubject>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.subjects = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TempteacherapplyPage');
  }
  
  gototempteacher(){
     this.navCtrl.push(TempteacherPage);
  }
  
  public fromdate = {
    month: ''
  }
  public todate = {
    month: ''
  }
  
  addSubject(subjectname){
        let subject = new Classsubject(subjectname);
        this.subjects.push(subject);
    }

    removeSubject(subject){
        let index = this.subjects.indexOf(subject);
        this.subjects.splice(index,1);
    }

}
