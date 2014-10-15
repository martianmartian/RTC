

var boss=new Firebase('https://pracenglish.firebaseio.com/')



var successPush=function(error) {
  if (error) {
    alert("Data could not be saved." + error);
  } else {
    alert("Data saved successfully.");
  }
}





$(document).ready(function(){
	$('#words').click(function(){
		var currentFire=boss.child("selected").child("words")
		$('.wds').each(function(){
			var content=$(this).html()
			currentFire.push(content)
		})
	})
})

$(document).ready(function(){
	$('#phrases').click(function(){
		var currentFire=boss.child("selected").child("phrases")
		$('.phrs').each(function(){
			var content=$(this).html()
			currentFire.push(content)
		})
	})
})

$(document).ready(function(){
	$('#idioms').click(function(){
		var currentFire=boss.child("selected").child("idioms")
		$('.idm').each(function(){
			var content=$(this).html()
			currentFire.push(content)
		})
	})
})




