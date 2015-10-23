var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('template',['users']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());

app.get('/users', function(req,res){
	console.log("I Recieve a GET request");

	db.users.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post('/users', function(req,res){
	console.log(req.body);
	db.users.insert(req.body,function(err,docs){
		res.json(docs);
	});
});

app.delete('/users/:id',function(req,res){
	var id = req.params.id;
	console.log(id);
	db.users.remove({_id: mongojs.ObjectId(id)},function(err,docs){
		res.json(docs);
	});
});

app.get('/users/:id',function(req,res){
	var id = req.params.id;
	console.log(id);
	db.users.findOne({_id: mongojs.ObjectId(id)},function(err,docs){
		res.json(docs);
	});
});

app.put('/users/:id',function(req,res){
	var id = req.params.id;
	console.log(req.body.name);
	db.users.findAndModify({query : {_id: mongojs.ObjectId(id)},
	update: {$set: {name: req.body.name, lastName: req.body.lastName}},
	new: true},function(err, docs){
		res.json(docs);
	});
});

app.listen(3000);

console.log("Server running on port 3000");