/*//INVITATION TO REGISTER PAGE START
var array1=[];
function demo(items)
{
	array1=items
    $('#demo1').html("");      
          	
	for (var i=0; i<items.length;i++ )
	{		
  $('#demo1').append("<div class='float_left mb_20p mr_5p'><div class='float_left bg_grey h_22p  border_radius11 pos_rel'><p class='pl_15p pr_26p' >"+items[i]+"</p> </div><span style='display:none;' class='step size-32 font40 color_grey ' onclick='demo1("+i+")'> <i class='icon ion-minus-circled'></i></span></div>"); 
	}
}

function demo1(a){
	
	//alert(array1)
	array1.splice(a,1);
	console.log(array1);
	 $('#demo1').html(""); 
	for (var i=0; i<array1.length;i++ )
	{		
  $('#demo1').append("<div class='float_left mb_20p mr_5p'><div class='float_left bg_grey h_22p  border_radius11 pos_rel'><p class='pl_15p pr_26p' >"+array1[i]+"</p> </div><span style='display:none;' class='step size-32 font40 color_grey ' onclick='demo1("+i+")'> <i class='icon ion-minus-circled'></i></span></div>"); 
	}
	}
//INVITATION TO REGISTER PAGE OVER*/
	
/*//CARRICULUM PAGE START
var carriculumarray1=[];
function carriculumdemo(curriculumitems)
{
	carriculumarray1=curriculumitems
    $('#carriculumdiv').html("");      
          	
	for (var i=0; i<curriculumitems.length;i++ )
	{		
 	 $('#carriculumdiv').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42''>"+curriculumitems[i]+"</p></div>"); 
	}
}

function carriculumdemo1(a){
	
	//alert(array1)
	carriculumarray1.splice(a,1);
	console.log(carriculumarray1);
	 $('#carriculumdiv').html(""); 
	for (var i=0; i<carriculumarray1.length;i++ )
	{		
 	 $('#carriculumdiv').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42'>"+carriculumarray1[i]+"</p></div>"); 
	}
	}
	
// FOR LANGUAGE SELECTION
var languagearray1=[];
function languagedemo(languageitems)
{
	languagearray1=languageitems
    $('#languagediv').html("");      
          	
	for (var j=0; j<languageitems.length;j++ )
	{		
 	 $('#languagediv').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42''>"+languageitems[j]+"</p></div>"); 
	}
}

function languagedemo1(a){
	
	//alert(array1)
	languagearray1.splice(a,1);
	console.log(languagearray1);
	 $('#languagediv').html(""); 
	for (var j=0; j<languagearray1.length;j++ )
	{		
 	 $('#languagediv').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42'>"+languagearray1[j]+"</p></div>"); 
	}
	}
//CARRICULUM PAGE OVER*/

//INVITATION TO REGISTER PAGE START
var array1=[];
function demo(items)
{
	array1=items
    $('#demo1').html("");      
          	
	for (var i=0; i<items.length;i++ )
	{		
  $('#demo1').append("<div class='float_left mb_20p mr_5p'><div class='float_left bg_grey h_22p  border_radius11 pos_rel'><p class='pl_15p pr_26p' >"+items[i]+"</p> </div><span style='display:none;' class='step size-32 font40 color_grey ' onclick='demo1("+i+")'> <i class='icon ion-minus-circled'></i></span></div>"); 
	}
}

function demo1(a){
	
	//alert(array1)
	array1.splice(a,1);
	console.log(array1);
	 $('#demo1').html(""); 
	for (var i=0; i<array1.length;i++ )
	{		
  $('#demo1').append("<div class='float_left mb_20p mr_5p'><div class='float_left bg_grey h_22p  border_radius11 pos_rel'><p class='pl_15p pr_26p' >"+array1[i]+"</p> </div><span style='display:none;' class='step size-32 font40 color_grey ' onclick='demo1("+i+")'> <i class='icon ion-minus-circled'></i></span></div>"); 
	}
	}
//INVITATION TO REGISTER PAGE OVER
	
// ADD YEARS PAGE START
var carriculumarray1=[];
function carriculumdemo(curriculumitems)
{
	carriculumarray1=curriculumitems;
    $('#carriculumdiv').html("");  
	$('#carriculumdivmob').html("");
	for (var i=0; i<curriculumitems.length;i++ )
	{	
		
		$('#carriculumdiv').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42''>"+curriculumitems[i]+"</p></div>"); 
		$('#carriculumdivmob').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42''>"+curriculumitems[i]+"</p></div>"); 
	}
}

function carriculumdemo1(a){
	
	//alert(array1)
	carriculumarray1.splice(a,1);
	console.log(carriculumarray1);
	 $('#carriculumdiv').html(""); 
	for (var i=0; i<carriculumarray1.length;i++ )
	{		
 	 $('#carriculumdiv').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42'>"+carriculumarray1[i]+"</p></div>"); 
	}
	}
	
// FOR LANGUAGE SELECTION
var languagearray1=[];
function languagedemo(languageitems)
{
	languagearray1=languageitems
    $('#languagediv').html(""); 
	$('#languagedivmob').html("");     
          	
	for (var j=0; j<languageitems.length;j++ )
	{		
 	 $('#languagediv').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42''>"+languageitems[j]+"</p></div>"); 
	 $('#languagedivmob').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42''>"+languageitems[j]+"</p></div>");
	}
}

function languagedemo1(a){
	
	//alert(array1)
	languagearray1.splice(a,1);
	console.log(languagearray1);
	 $('#languagediv').html(""); 
	for (var j=0; j<languagearray1.length;j++ )
	{		
 	 $('#languagediv').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42'>"+languagearray1[j]+"</p></div>"); 
	}
	}
	
// FOR CURRICULUM GROUP SELECTION
var carriculumgrouparray1=[];
function carriculumgroupdemo(curriculumgroupitems)
{
	carriculumgrouparray1=curriculumgroupitems
    $('#carriculumgroupdiv').html("");
	$('#carriculumgroupdivmob').html("");       
          	
	for (var i=0; i<curriculumgroupitems.length;i++ )
	{		
	 $('#carriculumgroupdiv').append("<div class='width100 float_left'><div class='float_left color_42 cur_text mt_7p'><p>"+curriculumgroupitems[i]+"</p></div></div>"); 
	 $('#carriculumgroupdivmob').append("<div class='width100 float_left'><div class='float_left color_42 cur_text mt_7p'><p>"+curriculumgroupitems[i]+"</p></div></div>");  
	}
}

/*function carriculumgroupdemo1(a){
	
	//alert(array1)
	carriculumarray1.splice(a,1);
	console.log(carriculumarray1);
	 $('#carriculumdiv').html(""); 
	for (var i=0; i<carriculumarray1.length;i++ )
	{		
 	 $('#carriculumdiv').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42'>"+carriculumarray1[i]+"</p></div>"); 
	}
	}*/
//ADD YEARS PAGE OVER

// ADD ROOM PAGE START
var equipmentarray1=[];
function equipmentdemo(equipment1items)
{
	equipmentarray1=equipment1items
    $('#equipment1div').html("");      
          	
	for (var i=0; i<equipment1items.length;i++ )
	{		
 	/* $('#equipment1div').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42''>"+equipment1items[i]+"</p></div>"); */
	 $('#equipment1div').append("<div class='equipment_div'><ion-col col-6 class='bg_ec pl_20p colwidth100_576 float_left'><ion-list class='width100 pos_rel bb2_67'><ion-item><p class='lh_40 font18 fontopensansreg color_42'>"+equipment1items[i]+"</p></ion-item> <span class='step size-32 minus_arrow_set'> <i class='icon ion-android-remove'></i> </span> </ion-list></ion-col><ion-col col-6 class='colwidth100_576 display_none_576 bg_ec pr_20p float_left'><ion-list class='width100 pos_rel bb2_67'><ion-item><p class='lh_40 font18 fontopensansreg color_42'>25</p></ion-item></ion-list></ion-col></div>");
	}
}

/*function equipmentdemo1(a){
	
	//alert(array1)
	equipmentarray1.splice(a,1);
	console.log(equipmentarray1);
	 $('#equipment1div').html(""); 
	for (var i=0; i<equipmentarray1.length;i++ )
	{		
	 $('#equipment1div').append("<div class='equipment_div'><ion-col col-6 class='bg_ec pl_20p float_left'><ion-list class='width100 pos_rel bb2_67'><ion-item><p class='lh_40 font18 fontopensansreg color_42'>"+equipmentarray1[i]+"</p></ion-item> <span class='step size-32 minus_arrow_set'> <i class='icon ion-android-remove'></i> </span> </ion-list></ion-col><ion-col col-6 class='bg_ec pr_20p float_left'><ion-list class='width100 pos_rel bb2_67'><ion-item><p class='lh_40 font18 fontopensansreg color_42'>25</p></ion-item></ion-list></ion-col></div>");
	}
}*/

//For Second enquipment
var equipmentarray2=[];
function equipment2demo(equipment2items)
{
	equipmentarray2=equipment2items
    $('#equipment2div').html("");      
          	
	for (var j=0; j<equipment2items.length;j++ )
	{		
 	/* $('#equipment1div').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42''>"+equipment1items[i]+"</p></div>"); */
	 $('#equipment2div').append("<div class='equipment_div'><ion-col col-6 class='colwidth100_576 bg_ec pl_20p float_left'><ion-list class='width100 pos_rel bb2_67'><ion-item><p class='lh_40 font18 fontopensansreg color_42'>"+equipment2items[j]+"</p></ion-item> <span class='step size-32 minus_arrow_set'> <i class='icon ion-android-remove'></i> </span> </ion-list></ion-col><ion-col col-6 class='colwidth100_576 display_none_576 bg_ec pr_20p float_left'><ion-list class='width100 pos_rel bb2_67'><ion-item><p class='lh_40 font18 fontopensansreg color_42'>25</p></ion-item></ion-list></ion-col></div>");
	}
}

/*function equipmentdemo1(a){
	equipmentarray2.splice(a,1);
	console.log(equipmentarray2);
	 $('#equipment2div').html(""); 
	for (var j=0; j<equipmentarray2.length;j++ )
	{		
	 $('#equipment2div').append("<div class='equipment_div'><ion-col col-6 class='bg_ec pl_20p float_left'><ion-list class='width100 pos_rel bb2_67'><ion-item><p class='lh_40 font18 fontopensansreg color_42'>"+equipmentarray2[j]+"</p></ion-item> <span class='step size-32 minus_arrow_set'> <i class='icon ion-android-remove'></i> </span> </ion-list></ion-col><ion-col col-6 class='bg_ec pr_20p float_left'><ion-list class='width100 pos_rel bb2_67'><ion-item><p class='lh_40 font18 fontopensansreg color_42'>25</p></ion-item></ion-list></ion-col></div>");
	}
}*/
	

//ADD ROOM PAGE OVER

// CLASS SHEDULE PAGE START
var shedulecarriculumarray1=[];
function shedulecarriculumdemo(curriculumitems)
{
	shedulecarriculumarray1=curriculumitems
    $('#carriculumdiv').html("");      
          	
	for (var i=0; i<curriculumitems.length;i++ )
	{		
 	 $('#carriculumdiv').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42''>"+curriculumitems[i]+"</p></div>"); 
	}
}
//For Second enquipment
var equipmentarray2=[];
function sheduleequipmentdemo(equipment2items)
{
	equipmentarray2=equipment2items
    $('#equipment2div').html("");      
          	
	for (var j=0; j<equipment2items.length;j++ )
	{		
 	/* $('#equipment1div').append("<div class='float_left width100 lh_49 mt_5p bg_grey'><p class='pl_15p font12 color_42''>"+equipment1items[i]+"</p></div>"); */
	 $('#equipment2div').append("<div class='equipment_div'><ion-col col-6 class='bg_ec pl_20p float_left'><ion-list class='width100 pos_rel bb2_67'><ion-item><p class='lh_40 font18 fontopensansreg color_42'>"+equipment2items[j]+"</p></ion-item> <span class='step size-32 minus_arrow_set'> <i class='icon ion-android-remove'></i> </span> </ion-list></ion-col><ion-col col-6 class='bg_ec pr_20p float_left'><ion-list class='width100 pos_rel bb2_67'><ion-item><p class='lh_40 font18 fontopensansreg color_42'>25</p></ion-item></ion-list></ion-col></div>");
	}
}
//CLASS SHEDULE PAGE OVER

// NEW ASSIGNMENTS PAGE START
//for curriculum div
var curriculumarray1=[];
function curriculumdemo(curriculumitems)
{
	curriculumarray1=curriculumitems
    $('#curriculumdiv').html("");      
          	
	for (var i=0; i<curriculumitems.length;i++ )
	{		
	 $('#curriculumdiv').append("<div class='width100 float_left'><div class='color_42 cur_text mt_7p'><p>"+curriculumitems[i]+"</p></div></div>");  
	}
}

//for subsection div
var subsectionarray1=[];
function subsectiondemo(subsectionitems)
{
	subsectionarray1=subsectionitems
    $('#subsectiondiv').html("");      
          	
	for (var i=0; i<subsectionitems.length;i++ )
	{		
	 $('#subsectiondiv').append("<div class='width100 float_left'><div class='color_42 cur_text mt_7p'><p>"+subsectionitems[i]+"</p></div></div>");  
	}
}
// NEW ASSIGNMENTS PAGE OVER

// LESSON PAGE START
var assigneesarray1=[];
function assigneesdemo(assigneesitems)
{
	assigneesarray1=assigneesitems
    $('#assigneesdiv').html("");      
          	
	for (var i=0; i<assigneesitems.length;i++ )
	{		
	 $('#assigneesdiv').append("<div class='color_42 cur_text mt_7p mr_10p float_left'><p>"+assigneesitems[i]+"</p></div>");  
	}
}
// LESSON PAGE OVER

// PUBLIC EVENT PAGE START
//for invite
var invitearray1=[];
function invitedemo(inviteitems)
{
	invitearray1=inviteitems
    $('#invitediv').html("");      
          	
	for (var i=0; i<inviteitems.length;i++ )
	{		
	 $('#invitediv').append("<div class='color_42 cur_text mt_7p mr_10p float_left'><p>"+inviteitems[i]+"</p></div>");  
	}
}

//for invite via email
var inviteviaemailarray1=[];
function inviteviaemaildemo(inviteviaemailitems)
{
	inviteviaemailarray1=inviteviaemailitems
    $('#inviteviaemaildiv').html("");      
          	
	for (var i=0; i<inviteviaemailitems.length;i++ )
	{		
	 $('#inviteviaemaildiv').append("<div class='color_42 cur_text mt_7p mr_10p float_left'><p>"+inviteviaemailitems[i]+"</p></div>");  
	}
}
// PUBLIC EVENT PAGE OVER

// PRIVATE EVENT PAGE START
var invitearray1=[];
function invitedemoprivateevent(inviteitems)
{
	invitearray1=inviteitems
    $('#invitediv').html("");      
          	
	for (var i=0; i<inviteitems.length;i++ )
	{		
	 $('#invitediv').append("<div class='color_42 cur_text mt_7p mr_10p float_left'><p>"+inviteitems[i]+"</p></div>");  
	}
}
// PRIVATE EVENT PAGE OVER

//**************************************************	DYNAMICALLY CREATE AND DELETE ROW START   *******************************************************************************//
var familyparent = angular.module('familyparent',[]);
function familyparentCtrl($scope) {
  $scope.items = [];
  $scope.newitem = '';
  $scope.addparent = function(){
    if ($scope.newitem != '') {
      $scope.items.push($scope.newitem);
	 // console.log($scope.items);
	  $scope.newitem = '';
	  
    }
  }
  $scope.delparent = function(i){
    $scope.items.splice(i,1);
  }
  
  $scope.items1 = [];
  $scope.newitem1 = '';
  $scope.addstudent = function(){
    if ($scope.newitem1 != '') {
      $scope.items1.push($scope.newitem1);
	  $scope.newitem1 = '';
    }
  }
  $scope.delstudent = function(i){
    $scope.items1.splice(i,1);
  }
  
  $scope.address = [];
  $scope.newaddress = '';
  $scope.addaddress = function(){
    if ($scope.newaddress != '') {
      $scope.address.push($scope.newaddress);
	  $scope.newaddress = '';
    }
  }
  $scope.deladdress = function(i){
    $scope.address.splice(i,1);
  }
  
  // INVITATION TO REGISTER
  $scope.invitation = [];
  $scope.newinvitation = '';
  $scope.addinvitaion = function(){
    if ($scope.newinvitation != '') {
      $scope.invitation.push($scope.newinvitation);
	  $scope.newinvitation = '';
    }
  }
  
  //QUICKACTION-BOOK-EQUIPMENT-ROOM START
  $scope.equipments = [];
  $scope.neweqcapacity = [];
  $scope.newequipment = '';
  $scope.newcapacity = '';
  $scope.addequipment = function(){
    if ($scope.newequipment != '') {
      $scope.equipments.push($scope.newequipment);
	 // console.log($scope.items);
	  $scope.newequipment = '';
	  $scope.newcapacity = '';
    }
  }
  $scope.delparent = function(i){
    $scope.equipments.splice(i,1);
  }
//QUICKACTION-BOOK-EQUIPMENT-ROOM START
//LIST OF EQUIPMENT PAGE START
  $scope.equipment = [];
  $scope.newequipment = '';
  $scope.addequipment = function(){
    if ($scope.newequipment != '') {
		//alert("call")
      $scope.equipment.push($scope.newequipment);
	 // console.log($scope.items);
	  $scope.newequipment = '';
	  
    }
  }
  $scope.delequipment = function(i){
    $scope.equipment.splice(i,1);
  }
//LIST OF EQUIPMENT PAGE END 
  
  
  //FOR SHOW SELECT BOX OPTIONS
  $scope.chk='0';
  $scope.openselectbox=function() {
	//alert("cal")
	   if($scope.chk == '0')
		{
			//alert("cal")
		$scope.chk='1'
		}
		else
		{
		$scope.chk='0'
		}
     } 
	 
	 $scope.regtype=function() {
		 	//alert("call")
		 }
		 		 
	//FOR APPLICATION REGISTER PAGE
	$scope.subdiv1='0';
	 $scope.uparrow = '0';
	 $scope.downarrow = '1';
 	 $scope.opensubdiv1=function() {
	//alert("cal")
	   if($scope.subdiv1 == '0')
		{
			//alert("cal")
		$scope.subdiv1='1';
		 $scope.uparrow = '1';
		 $scope.downarrow = '0';
		}
		else
		{
		$scope.subdiv1='0';
		 $scope.uparrow = '0';
		 $scope.downarrow = '1';
		}
     } 
	 $scope.subdiv2='0';
	 $scope.uparrow1 = '0';
	 $scope.downarrow1 = '1';
 	 $scope.opensubdiv2=function() {
	//alert("cal")
	   if($scope.subdiv2 == '0')
		{
			//alert("cal")
		$scope.subdiv2='1';
		 $scope.uparrow1 = '1';
		 $scope.downarrow1 = '0';
		}
		else
		{
		$scope.subdiv2='0';
		$scope.uparrow1 = '0';
		 $scope.downarrow1 = '1';
		}
     } 
	 
//FOR LOG INCIDENT PAGE (QUICK ACTION
	 $scope.logincidentsubdiv1='0';
	 $scope.uparrow = '0';
	 $scope.downarrow = '1';
 	 $scope.logincidentopensubdiv1=function() {
	//alert("cal")
	   if($scope.logincidentsubdiv1 == '0')
		{
			//alert("cal")
		$scope.logincidentsubdiv1='1';
		$scope.uparrow = '1';
		 $scope.downarrow = '0';
		}
		else
		{
		$scope.logincidentsubdiv1='0';
		$scope.uparrow = '0';
		 $scope.downarrow = '1';
		}
     } 

//	FOR QUICK ACTION ROLE CALL 
 $scope.rolecallsubdiv1='0';
 $scope.uparrow = '0';
 $scope.downarrow = '1';
 	 $scope.rolecallopensubdiv1=function() {
	//alert("cal")
	   if($scope.rolecallsubdiv1 == '0')
		{
			//alert("cal")
		$scope.rolecallsubdiv1='1';
		 $scope.uparrow = '1';
		 $scope.downarrow = '0';
		}
		else
		{
		$scope.rolecallsubdiv1='0';
		 $scope.uparrow = '0';
		 $scope.downarrow = '1';
		}
     } 
	 
// Add student info page

	 $scope.primarysubdiv='0';
	 $scope.minusarrow = '0';
	 $scope.plusarrow = '1';
 	 $scope.showprimarysubdiv=function() {
	//alert("cal")
	   if($scope.primarysubdiv == '0')
		{
			//alert("cal")
		$scope.primarysubdiv='1';
		 $scope.minusarrow = '1';
		 $scope.plusarrow = '0';
		}
		else
		{
		$scope.primarysubdiv='0';
		$scope.minusarrow = '0';
		 $scope.plusarrow = '1';
		} 
     } 
	 
	 $scope.secondarydiv='0';
	 $scope.minusarrow1 = '0';
	 $scope.plusarrow1 = '1';
 	 $scope.showsecondarysubdiv=function() {
	//alert("cal")
	   if($scope.secondarydiv == '0')
		{
			//alert("cal")
		$scope.secondarydiv='1';
		 $scope.minusarrow1 = '1';
		 $scope.plusarrow1 = '0';
		}
		else
		{
		$scope.secondarydiv='0';
		$scope.minusarrow1 = '0';
		 $scope.plusarrow1 = '1';
		} 
     } 
	 
}
//**************************************************	DYNAMICALLY CREATE AND DELETE ROW OVER *******************************************************************************//


/*$('.chkbox').on('change', function(){ 
alert("3")// on change of state
  if(this.checked) // if changed state is "CHECKED"
   {
       alert("2")// do the magic here
   }
})*/
/*$(".chkbox").click(function() {
	alert("call");
    if ($(this).attr('checked')){alert("1");}
});*/

/*$( document ).ready(function() {
   	 $("#datepicker" ).datepicker();
});*/

/*var pageheight = $(window).height()-94;
	$(document).ready(function(){
		
		$(".page_height").css('height',pageheight);
	});*/
	
	