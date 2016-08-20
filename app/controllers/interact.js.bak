'use strict';
var Stock = require('../model/stock');
var ajaxFunction = require('../common/ajaxFunction');
module.exports = function(){
	this.add = function(req,res,socket){
		var stock = new Stock();
		function callback(result){
			stock.stockName = req.query.symbol;
			//stock.ip = req.headers["x-forwarded-for"];
			socket.emit('addNewStock',result);
			stock.save(function(err){
				if(err){ throw err;}
			});
			
			res.json({value:req.query.symbol,message:'added successfully'});
		}
		ajaxFunction(req,res,'get',callback,[stock,socket]);
	
	};
	this.delet = function(req,res,socket){
		Stock.findOneAndRemove({'stockName':req.query.symbol},{'passRawResult':false},function(err,doc){
			if(err){ throw err;}
			//特定情况，这里删除的一定是有的，这是由前端决定的。
			console.log('the stock: '+doc.stockName+" has been deleted.");
			res.json({value:doc.stockName,message:'the stock has deleted successfully.'})
		});
		socket.emit('delete stocks',req.query.symbol);
	};
	this.find = function(req,res){
		Stock.find({},function(err,docs){
			if(err){ throw err;}
			if(docs.length !== 0){
				var docs = docs.map(function(ele){
					return ele.stockName;
				});	
				res.json({value:docs,message:'get the symbols successfully'});
			}else{
				res.json({value:null,message:'no any symbols.'})
			}
			
		});
	};
};