import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Teacher} from './teacher';

/**
 * Generated class for the TempteacherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-absentteachers1',
  templateUrl: 'absentteachers1.html',
})
export class Absentteachers1Page {
teachers: Array<Teacher>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.teachers = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Absentteachers1Page');
  }
  
addTeacher(teachername){
        let teacher = new Teacher(teachername);
        this.teachers.push(teacher);
    }

    removeTeacher(teacher){
        let index = this.teachers.indexOf(teacher);
        this.teachers.splice(index,1);
    }

}
