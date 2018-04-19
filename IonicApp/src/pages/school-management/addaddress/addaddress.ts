import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { AddschoolPage } from '../addschool/addschool';
import { AddaddressmobPage } from '../addaddressmob/addaddressmob';
import {Building} from './additem';
import {Floor} from './additem';

declare function building_name(buildingname);
declare function floor_name(floorname,index);
declare function add_rooms(rooms,j);

declare function showhide(j,n);
declare function remove_floor(index,floor);
declare function remove_building(building,j);


/**
 * Generated class for the AddaddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-addaddress',
  templateUrl: 'addaddress.html',
})
 
export class AddaddressPage {

width : any;
buildings: Array<Building>;
floors: Array<Floor>;
myarray1:any;
main1:any;
rooms:any;
floor_rooms1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
   this.buildings = [];
   this.floors = [];
   this.main1 = [];
   this.width = window.innerWidth;
  // console.log(this.width);
   if(this.width<768){
		this.navCtrl.push(AddaddressmobPage);
	}
  }
  
  ionViewDidLoad() {
  eval('window.AddaddressPage = this');
    console.log('ionViewDidLoad AddaddressPage');
  }
  
  addBuilding(buildingname){
        let building = new Building(buildingname);
        this.buildings.push(building);
		 building_name(buildingname);
		// console.log('this.buildings'+JSON.stringify(this.buildings));
		// console.log('Lenght'+JSON.stringify(this.buildings.length));
		
		
    }

    removeBuilding(building,j){
       let index = this.buildings.indexOf(building);
      this.buildings.splice(index,1);
		
		this.main1.splice(j,1)
		window.localStorage.setItem('my',JSON.stringify(this.main1));
		
		remove_building(building,j);
		this.show_info();
    }
	
	addFloor(floorname,buildingname,building){
	   
	   let index = this.buildings.indexOf(building);
	 //  let floor = new Floor(floorname);
	//  this.floors.push(floor);
	  //this.floors =  this.buildings[index].floordata;
       
	  floor_name(floorname,index);
	  this. show_info();
   }

    removeFloor(index,floor){
        //let index = this.floors.indexOf(floor);
		//alert(index+1);
		//alert(index+ 'floor'+floor)
        //this.floors.splice(index,1);
		this.main1[index].floor_no.splice(floor,1)
		window.localStorage.setItem('my',JSON.stringify(this.main1));
		
		remove_floor(index,floor);
		this.show_info();
    }

  
   goBack(){
     this.navCtrl.push(AddschoolPage);
  }
  
 value_select(a,j){
 
 window.localStorage.setItem('rooms',a);
  window.localStorage.setItem('floor_rooms',j);
  
 } 
 addroom()
 {

 this.rooms = window.localStorage.getItem('rooms');
  this.floor_rooms1 = window.localStorage.getItem('floor_rooms');
 
  add_rooms(this.rooms,this.floor_rooms1);
  
 }
 
 show_info()
 {
 //alert("call")
 if(window.localStorage.getItem('my'))
{
this.myarray1 = window.localStorage.getItem('my');
//console.log(JSON.parse(this.myarray1));
this.main1=JSON.parse(this.myarray1)	
}

 } 
  
year1div='0';
downarrow1 = '1';
uparrow1 = '1';
showyear1(j,n){

showhide(j,n)


if(this.year1div == '0' && j == j){


	  this.year1div ='1';
	  this.downarrow1 = '0';
	  this.uparrow1 = '0';
}
else{

		this.year1div='0';
		this.downarrow1 = '1';
		this.uparrow1 = '1';
	}


}
showyear2(j,n){

showhide(j,n);


if(this.year1div == '0' && j == j){


	  this.year1div ='1';
	  this.downarrow1 = '0';
	  this.uparrow1 = '0';
}
else{

		this.year1div='0';
		this.downarrow1 = '1';
		this.uparrow1 = '1';
	}


}

}
