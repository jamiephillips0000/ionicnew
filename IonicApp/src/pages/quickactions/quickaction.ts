import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PanicPage } from './panic';
import { AbsencePage } from './absence';
import { QuickactionRolecallPage } from '../quickaction-rolecall/quickaction-rolecall';
import { Absentteachers1Page } from '../tempteacherapply/absentteachers1/absentteachers1';
import { AddincidentPage } from '../dashboard-teacher/addincident/addincident';
import { QuickactionBookPage } from '../quickaction-book/quickaction-book';
import { NewRegistrationPage } from '../new-registration/new-registration';
import { RestService } from '../../services/rest/restservice'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'quickaction.html',
})
export class QuickactionPage {

  pages: Array<Array<{ title: string, component: any }>>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: RestService) {
    this.pages = [
      [{ title: 'Absent', component: AbsencePage }, { title: 'Absent Teacher', component: Absentteachers1Page }],
      [{ title: 'Role Call', component: QuickactionRolecallPage }, { title: 'Log Incident', component: AddincidentPage }],
      [{ title: 'Panic', component: PanicPage }, { title: 'Book Equipment/Room', component: QuickactionBookPage }],
      [{ title: 'Register', component: NewRegistrationPage }]
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanicPage');
  }
  panic() {
    this.navCtrl.setRoot(PanicPage);
  }
  absence() {
	   this.navCtrl.setRoot(AbsencePage);

  }
  goto(name : string) {
    for(let i=0; i<this.pages.length; i++){
      if(this.pages[i][0].title == name){
        this.navCtrl.push(this.pages[i][0].component);
        break;
      }else if(this.pages[i][1].title == name){
        this.navCtrl.push(this.pages[i][1].component);
        break;
      }
    }
//	   this.navCtrl.push(QuickactionRolecallPage);
  }
  goBack(){
    this.navCtrl.pop();
  }

}
