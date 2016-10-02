var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/contactlist", function(req, res) {
	console.log("I received a GET request");
	
	person1 = {
		name: "Bob",
		email: "bob@bob.com",
		number: "123 123-1234"
	};	
	
	person2 = {
		name: "Jane",
		email: "jane@jane.com",
		number: "123 321-1234"
	};
	
	person3 = {
		name: "xdMan",
		email: "xd@xd.com",
		number: "123 321-6969"
	};
	
	var contactlist = [person1, person2, person3];
	
	res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");
