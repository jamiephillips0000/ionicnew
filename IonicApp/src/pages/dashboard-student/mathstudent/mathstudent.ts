import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonRangeSliderModule } from "ng2-ion-range-slider";

/**
 * Generated class for the MathstudentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mathstudent',
  templateUrl: 'mathstudent.html',
})
export class MathstudentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MathstudentPage');
  }
   /*gotoprivacy(){
     this.navCtrl.push(PrivacyPage);
  }*/
  
  
 subject1div='0';
downarrow1 = '1';
uparrow1 = '1';
subject1(){
if(this.subject1div == '0'){
this.subject1div ='1';
this.downarrow1 = '0';
this.uparrow1 = '0';
}
else{
this.subject1div='0';
this.downarrow1 = '1';
this.uparrow1 = '1';
	}
}

school1div='0';
downarrow2 = '1';
uparrow2 = '1';
school1(){
if(this.school1div == '0'){
this.school1div ='1';
this.downarrow2 = '0';
this.uparrow2 = '0';
}
else{
this.school1div='0';
this.downarrow2 = '1';
this.uparrow2 = '1';
	}
}


// Doughnut
//public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
public doughnutChartData:number[] = [20, 30, 50, 35];
public pieChartColors:{}[] = [{ backgroundColor: ['#f44336', '#ffc107', '#cddc39', '#8bc34a'] }];
public doughnutChartType:string = 'doughnut';

// events
public chartClicked(e:any):void {
 console.log(e);
}

public chartHovered(e:any):void {
 console.log(e);
}

}
