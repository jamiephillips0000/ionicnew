import { Component } from '@angular/core';
import {  } from 'ionic-angular';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { InvitationtoregisterPage } from '../invitationtoregister/invitationtoregister';
import { RestService } from '../../services/rest/restservice'
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private username: string;
  private password: string;
  private error: string;

  loading: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public restService : RestService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  gotoinvitationtoregister(){
     this.navCtrl.push(InvitationtoregisterPage);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  login(){
   this.showLoading();
   console.log("email this.username, >>" +  this.username);
    let credentials = {
    "email" : this.username,
    "password" : this.password
  };
    this.restService.login(credentials).subscribe(resp => {
      console.log("here " + JSON.stringify(resp))
      if (resp.auth === true) {
        this.navCtrl.setRoot(HomePage);
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });

  }

}
