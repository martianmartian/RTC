
$(document).ready(function () {

	$("#loadBank").click(function(){
		boss.child("selected").on("value",function(snapshot){
   	 		document.getElementById('tableDiv').innerHTML +=load_table(load_fire(snapshot.val()))
   	 		//load original data from Firebase onto table. 
   	 		slct();	// enable select
   	 		push_fire_lesson(); // send selected data to Firebase
		})
	})

    $("#startLesson").click(function(){
        boss.on('child_added', function (snapshot) {

			document.getElementById('tableDiv').innerHTML = load_table(load_fire(snapshot.val()));
			//load the added lesson from firebase to the table
        })
    })
})


///////////////////////////before is definition/////////////////////////////////




var boss= new Firebase("https://pracenglish.firebaseio.com")


var load_fire=function(unit){

    var loadAll=[[],[],[]];
    var a=0;
	for (var i in unit){
  		//console.log("i is "+i);
        var b=0;
          for (var j in unit[i]){
              loadAll[a][b]=unit[i][j];
              b+=1;
          }
        //console.log("watch this");
        a+=1;
    }
    return loadAll;
};



var load_table=function(loadAll){

	var table='';
    for(var j in loadAll[0]){
        table += '<tr>'+
        '<td class="words">'+loadAll[0][j]+'</td>'+
        '<td class="phrases">'+loadAll[1][j]+'</td>'+
        '<td class="idioms">'+loadAll[2][j]+'</td>'+
        '</tr>';
    }

    return table;
    

};




var slct=function(){

    $('.words').click(function(){
        console.log("???");
        $(this).addClass('selected wds');
    })

    $('.phrases').click(function(){
        $(this).addClass('selected phrs');
    })

    $('.idioms').click(function(){
        $(this).addClass('selected idm');
    })

};


var push_fire_lesson=function(){

    var boss=new Firebase('https://pracenglish.firebaseio.com/')

    $('#selected').click(function(){
    	$('.wds').each(function(){boss.child("lesson").child("words").push($(this).html())});
    	$('.phrs').each(function(){boss.child("lesson").child("phrases").push($(this).html())});
    	$('.idm').each(function(){boss.child("lesson").child("idioms").push($(this).html())});
    })


};



	// boss.child("location/city").on("value", function(snapshot) {
 //  		//alert(snapshot.val());  // Alerts "San Francisco"
	// });

	// boss.set({
	// title: "Hello World!",
	// author: "Firebase",
	// location: {
	// city: "San Francisco",
	// state: "California",
	// zip: 94103
	// }
	// 	});
