'use strict';
var ajaxFunction = require('../common/ajaxFunction');
var Interact = require('../controllers/interact');
var interact = new Interact();
module.exports = function(app,socket){
	app.get('/search',function(req,res){
		ajaxFunction(req,res,'get');
	});
	app.get('/all',function(req,res){
		interact.find(req,res);
	});
	app.put('/add',function(req,res){
		interact.add(req,res,socket);
	});
	app.delete('/delete',function(req,res){
		interact.delet(req,res);	
	});
	
}