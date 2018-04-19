import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { AddschoolPage } from '../addschool/addschool';
import {Building} from './additem';
import {Floor} from './additem';

/**
 * Generated class for the AddaddressmobPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addaddressmob',
  templateUrl: 'addaddressmob.html',
})
export class AddaddressmobPage {
buildings: Array<Building>;
floors: Array<Floor>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.buildings = [];
   this.floors = [];
   
  }
  
  addBuilding(buildingname){
        let building = new Building(buildingname);
        this.buildings.push(building);
    }

    removeBuilding(building){
        let index = this.buildings.indexOf(building);
        this.buildings.splice(index,1);
    }
	
	addFloor(floorname){
        let floor = new Floor(floorname);
        this.floors.push(floor);
    }

    removeFloor(floor){
        let index = this.floors.indexOf(floor);
        this.floors.splice(index,1);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddaddressmobPage');
  }
   goBack(){
     this.navCtrl.push(AddschoolPage);
  }
  
year1div='0';
downarrow1 = '1';
uparrow1 = '1';
showyear1(){
if(this.year1div == '0'){
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
