import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import {Note} from './notes';

/**
 * Generated class for the StudenteditmodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studenteditmode',
  templateUrl: 'studenteditmode.html',
})
export class StudenteditmodePage {
notes: Array<Note>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.notes = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudenteditmodePage');
			
  }
  
   public event = {
    month: ''
  }
  public startdate1 = {
    month: ''
  }
  public enddate1 = {
    month: ''
  }
  public startdate2 = {
    month: ''
  }
  public enddate2 = {
    month: ''
  }
   public fromdate1 = {
    month: ''
  }
   public todate1 = {
    month: ''
  }
  
  addNote(notename){
        let note = new Note(notename);
        this.notes.push(note);
    }

    removeNote(note){
        let index = this.notes.indexOf(note);
        this.notes.splice(index,1);
    }

}
