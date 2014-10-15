
var boss=new Firebase('https://pracenglish.firebaseio.com');



$(document).ready(function(){
    $("#startLesson").click(function(){
        boss.on('child_added', function (snapshot) {
            var lesson = snapshot.val();
            //console.log("lesson is this:");
            //console.log(lesson);
            var loadLesson=load_lesson(lesson);
            //console.log("loadLesson is this:")
            //console.log(loadLesson)
            load_lesson_to_table(loadLesson)

        })

    })
});



var load_lesson=function(lesson){

    var loadLesson=[[],[],[]];
    var a=0;
    for (var i in lesson){
        //console.log("i is "+i);
        var b=0;
        for (var j in lesson[i]){
            loadLesson[a][b]=lesson[i][j];
            b+=1;
        }
        //console.log("watch this");
        a+=1;
    }
    return loadLesson;
};


var load_lesson_to_table=function(loadLesson){
    var table = '<table>';

    table +='<tr>'+
        '<th>Words</th>'+
        '<th>Phrases</th>'+
        '<th>Idioms</th>'+
        '</tr>';

    for(var j in loadLesson[0]){
        table += '<tr>'+
            '<td class="words">'+loadLesson[0][j]+'</td>'+
            '<td class="phrases">'+loadLesson[1][j]+'</td>'+
            '<td class="idioms">'+loadLesson[2][j]+'</td>'+
            '</tr>';
    }

    table +=
        '<tr>'+'<td colspan="">'+
        '<input id="words" type="button" value="select">'+
        '</td>'+
        '<td colspan="">'+
        '<input id="phrases" type="button" value="select">'+
        '</td>'+
        '<td colspan="">'+
        '<input id="idioms" type="button" value="select">'+
        '</td>'+'</tr>';
    table += '</table>';
    document.getElementById('tableDiv').innerHTML = table;

};
