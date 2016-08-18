var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stock = new Schema({
		stockName:String,
		ip:String
	},{
		versionKey:false
		});

module.exports = mongoose.model('stock',stock);