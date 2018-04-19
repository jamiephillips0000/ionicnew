import { Component, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import {Mainsection} from './additemschedule';
import {Subsection} from './additemschedule';

declare function mainsection_name(mainsectionname);
declare function subsection_name(subsectionname,index);

declare function remove_subsection(index,subsection);
declare function remove_mainsection(mainsection,j);

/**
 * Generated class for the SchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
mainsections: Array<Mainsection>;
subsections: Array<Subsection>;
myarray1:any;
main1:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.mainsections = [];
  this.subsections = [];
  this.main1 = [];
  }

  ionViewDidLoad() {
    eval('window.SchedulePage = this');
    console.log('ionViewDidLoad SchedulePage');
  }
  
  /*goBack(){
  	this.navCtrl.push(AddclassPage);
  }*/
  
 addMainsection(mainsectionname){
        let mainsection = new Mainsection(mainsectionname);
        this.mainsections.push(mainsection);
		 mainsection_name(mainsectionname);
		// console.log('this.buildings'+JSON.stringify(this.buildings));
		// console.log('Lenght'+JSON.stringify(this.buildings.length));
    }
	
 removeMainsection(mainsection,j){
       let index = this.mainsections.indexOf(mainsection);
       this.mainsections.splice(index,1);
		
		this.main1.splice(j,1)
		window.localStorage.setItem('my',JSON.stringify(this.main1));
		
		remove_mainsection(mainsection,j);
		this.show_info();
    }
	
addSubsection(subsectionname,mainsectionname,mainsection){
	   
	   let index = this.mainsections.indexOf(mainsection);
	 	//let floor = new Floor(floorname);
		//this.floors.push(floor);
	    //this.floors =  this.buildings[index].floordata;
       
	  subsection_name(subsectionname,index);
   }
   
  removeSubsection(index,subsection){
        //let index = this.floors.indexOf(floor);
		//alert(index+1);
		//alert(index+ 'floor'+floor)
        //this.floors.splice(index,1);
		this.main1[index].subsection_no.splice(subsection,1)
		window.localStorage.setItem('my',JSON.stringify(this.main1));
		
		remove_subsection(index,subsection);
		this.show_info();
    }
   
 	show_info()
		 {
		
			 if(window.localStorage.getItem('my'))
			{
			this.myarray1 = window.localStorage.getItem('my');
			console.log(JSON.parse(this.myarray1));
			this.main1=JSON.parse(this.myarray1)	
			}
		 } 

  
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

subject2div='0';
downarrow2 = '1';
uparrow2 = '1';
subject2(){
if(this.subject2div == '0'){
this.subject2div ='1';
this.downarrow2 = '0';
this.uparrow2 = '0';
}
else{
this.subject2div='0';
this.downarrow2 = '1';
this.uparrow2 = '1';
	}
}

subject3div='0';
downarrow3 = '1';
uparrow3 = '1';
subject3(){
if(this.subject3div == '0'){
this.subject3div ='1';
this.downarrow3 = '0';
this.uparrow3 = '0';
}
else{
this.subject3div='0';
this.downarrow3 = '1';
this.uparrow3 = '1';
	}
}

public date1 = {
    month: '1990-02-19'
  }
public date2 = {
    month: '1990-02-19'
  }
  public date3 = {
    month: '1990-02-19'
  }
public date4 = {
    month: '1990-02-19'
  }
  public date5 = {
    month: '1990-02-19'
  }
public date6 = {
    month: '1990-02-19'
  }

}
