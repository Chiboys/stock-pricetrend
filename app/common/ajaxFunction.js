'use strict';
var XMLHttp = require('xmlhttprequest').XMLHttpRequest;
module.exports = function(req,res,method,callback){
	if(arguments.length < 3){
		return console.log('the module of ajaxFunction\'s arguments\' number is less than required');
	}
	var start_date = req.query.start_date;
	var end_date = req.query.end_date;
	var symbol = req.query.symbol;
	var url = 'https://www.quandl.com/api/v3/datasets/WIKI/'+symbol+'.json?column_index=1&order=asc&collapse=daily&start_date='+start_date+'&end_date='+end_date+'&api_key='+process.env.API_KEY;
	var xmlhttp = new XMLHttp();
	var argus = arguments.length;//�õ������Ĳ�������
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
			var result = JSON.parse(xmlhttp.responseText);
			//�ж������Ƿ�ɹ����ɹ��ͻ������ݣ��ض����
				if(result.hasOwnProperty('quandl_error')){
					res.json({value:null,message:'the symbol is incorrect or no such stock'});
					console.error('ajaxFunction request error: '+result.quandl_error.message
								+'\n url: '+url);
				}else{
					//�ж��Ƿ��лص�����
					//������ת�����ض��ĸ�ʽ���Ա�������ݺʹ���
					result = result.dataset;
						result = {
							symbol:result['dataset_code'],
							data:result['data'],
							name:result['name'],
							message:'get the infor successfully.'
							
						};
					if(argus > 3){
						//������Ϊ�˴���callback�в��������
							callback(result);
					}else{
						res.json({value:result,message:'request succed'});
					}
				}
		}
		if(xmlhttp.readyState === 4 && xmlhttp.status !== 200){
			console.error('the ajaxFunction:the request is failed with code '+xmlhttp.status
						+'\n url: '+url);
			res.json({value:null,messagel:'system error ,please wait for a while'});
		}
	}
	xmlhttp.open(method,url,true);
	xmlhttp.send();
};