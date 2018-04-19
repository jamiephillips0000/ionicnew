import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudentprofilePrincipalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentprofile-principal',
  templateUrl: 'studentprofile-principal.html',
})
export class StudentprofilePrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		  
    }
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentprofileParentPage');
  }
  

  
school1div='0';
downarrow1 = '1';
uparrow1 = '1';
school1(){
if(this.school1div == '0'){
this.school1div ='1';
this.downarrow1 = '0';
this.uparrow1 = '0';
}
else{
this.school1div='0';
this.downarrow1 = '1';
this.uparrow1 = '1';
	}
}

school2div='0';
downarrow2 = '1';
uparrow2 = '1';
school2(){
if(this.school2div == '0'){
this.school2div ='1';
this.downarrow2 = '0';
this.uparrow2 = '0';
}
else{
this.school2div='0';
this.downarrow2 = '1';
this.uparrow2 = '1';
	}
}

school3div='0';
downarrow3 = '1';
uparrow3 = '1';
school3(){
if(this.school3div == '0'){
this.school3div ='1';
this.downarrow3 = '0';
this.uparrow3 = '0';
}
else{
this.school3div='0';
this.downarrow3 = '1';
this.uparrow3 = '1';
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
