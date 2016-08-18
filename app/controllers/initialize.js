function initialize(){
	//here，i am not sure that if the symbolArrDeal visit the url and method
	//try it.
	var url = '/all';
	var method = 'get';
	//when request at first,get the array
	function callback(arr){
		console.log('initialize array\n : ');
		console.log(arr);
		arr.forEach(function(ele){
			var url = '/search?symbol='+ele+'&start_date='+dateB+'&&end_date='+dateN;		
			ajaxFunctions.request(method,url,chart);
		});
	}
	ajaxFunctions.request(method,url,callback);

};
var socket = io();
socket.on('addNewStock',function(json){
	//json = JSON.parse(json);
	chart(json);
});
ajaxFunctions.ready(initialize);
