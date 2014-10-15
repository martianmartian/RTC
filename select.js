

$(document).ready(function(){
    $('.words').click(function(){
        //console.log("???");
        $(this).addClass('selected wds');
    })
});

$(document).ready(function(){
	$('.phrases').click(function(){
		$(this).addClass('selected phrs');
	})
});


$(document).ready(function(){
	$('.idioms').click(function(){
		$(this).addClass('selected idm');
	})
});




/*

var slct=function(){

    $('.words').click(function(){
        console.log("???");
        $(this).addClass('selected wds');
    });

    $('.phrases').click(function(){
        $(this).addClass('selected phrs');
    });

    $('.idioms').click(function(){
        $(this).addClass('selected idm');
    })

};


slct();

$(document).ready(slct());

*/