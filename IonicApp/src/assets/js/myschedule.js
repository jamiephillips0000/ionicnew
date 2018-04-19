localStorage.removeItem("my");
var myarray=  [];


function mainsection_name(mainsectionname)
{
//b["name"] = {};
var b =  {};
b["name"] = mainsectionname;
b["subsection_no"] = [];
	myarray.push(b)
	//console.log(JSON.stringify(myarray));
}

function subsection_name(subsectiondata,index)
{
	/*if(localStorage.getItem("my")){
		var demo= localStorage.getItem("my");
		myarray=JSON.parse(demo);
	}*/
var b =  {};	
b["subsection_name"] = subsectiondata;
//b["floor_room"] = [];
	myarray[index].subsection_no.push(b)
	console.log(JSON.stringify(myarray));
	
	localStorage.setItem("my",JSON.stringify(myarray));
	var demo= localStorage.getItem("my");
    window.SchedulePage.show_info();
}

function remove_mainsection(mainsection,j)
{

	myarray.splice(j,1)
	window.localStorage.setItem('my',JSON.stringify(this.myarray));

}

function remove_subsection(index,subsections1)
{

	myarray[index].subsection_no.splice(subsections1,1)
	window.localStorage.setItem('my',JSON.stringify(this.myarray));

}
