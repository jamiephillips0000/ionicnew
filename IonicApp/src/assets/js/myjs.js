localStorage.removeItem("my");
localStorage.removeItem('rooms');
localStorage.removeItem('floor_rooms');
var myarray=  [];


function building_name(buildingname)
{

var b =  {};
b["name"] = buildingname;
b["floor_no"] = [];
	myarray.push(b)
	//console.log(JSON.stringify(myarray));
}
function floor_name(floordata,index)
{
	/*if(localStorage.getItem("my")){
		var demo= localStorage.getItem("my");
		myarray=JSON.parse(demo);
	}*/
var b =  {};	
b["floor_name"] = floordata;
b["floor_room"] = [];
	myarray[index].floor_no.push(b)
	console.log(JSON.stringify(myarray));
	
	
	
	localStorage.setItem("my",JSON.stringify(myarray));
	var demo= localStorage.getItem("my");
   // window.AddaddressPage.show_info();
}

var array_room=  [];

function add_rooms(rooms,j)
{
	
	if(rooms == '' || rooms == null)
	{ 
       return false;
	}
	else{
	 
	myarray[j].floor_no[rooms].floor_room.push(rooms);
	localStorage.setItem("my",JSON.stringify(myarray));
	window.AddaddressPage.show_info();
	}
	;
}

function remove_floor(index,floors1)
{

myarray[index].floor_no.splice(floors1,1)
window.localStorage.setItem('my',JSON.stringify(this.myarray));

}
function remove_building(building,j)
{

myarray.splice(j,1)
window.localStorage.setItem('my',JSON.stringify(this.myarray));

}
function showhide(j,n){

if(n == '1')
	{
	  $("#show_"+j).css("display","none")
	}
else{
	  $("#show_"+j).css("display","block")
	}	
	
}