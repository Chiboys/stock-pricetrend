var express = require('express');
var mongoose = require('mongoose');
var parser = require('body-parser');
var dotenv = require('dotenv');
var Io = require('socket.io');
var Http = require('http');
var route = require('./app/routes/route');

var app = express();

app.use(parser.urlencoded({extended:false}));

dotenv.load();

var http = Http.Server(app);
var io = Io(http);


var monURI = process.MONGO_URI||process.env.MONGO_URI_N;
mongoose.connect(monURI);

app.use('/controllers',express.static(process.cwd()+'/app/controllers'));
app.use('/common',express.static(process.cwd()+'/app/common'));

io.on('connection',function(socket){
	route(app,io);
});

var port = 8080||process.env.PORT;
http.listen(port,function(){
	console.log('listen on port : '+port);
});
