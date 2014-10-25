
var http = require('http');
var static = require('node-static');
var file = new(static.Server)();
var Firebase=require("firebase");
var boss= new Firebase("https://nodelearn.firebaseio.com/")




http.createServer(function (req, res) {
	file.serve(req, res);

	// boss.set({
	// title: "Hello World!",
	// author: "Firebase",
	// location: {
	// city: "San Francisco",
	// state: "California",
	// zip: 94103
	// }
	
	boss.child("location/city").on("value", function(snapshot) {
  		console.log(snapshot.val()+"from front"); 
	});

}).listen(8008);






















/*
http.createServer(function (req, res) {
	var all="";

    fs.readFile("lesson.html",'utf8',function (err, data) {
    	if (err) throw err;
    	console.log("file read");
    	// why this line is executed so many times, but the 
    	// "write" line is only once?
    all+=data;
    render();
    });

    var render=function(){

	res.writeHead(200,{
		'Content-Type':'text/html'
	});
	res.write(all+"new parts");
	res.end();    	
    }


}).listen(8008);


*/












/*
var static = require('node-static');
var http = require('http');
var file = new(static.Server)();
var app = http.createServer(function (req, res) {
    file.serve(req, res);
}).listen(2013);
*/

