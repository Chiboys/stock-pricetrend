function add(e){
	e.preventDefault();
	var symbol = input.value;
	input.value = '';
	message.innerHTML = '';
	if(symbolArr.indexOf(symbol) !== -1){
		message.innerHTML = 'the stock has exist.';
		return ;
	}
	function callback(json){
		console.log('the stock (whose symbole is '+json +') added successfully');
	}
	console.log('ready to add the symbol '+symbol+'to db');
	var url = '/add?symbol='+symbol+'&start_date='+dateB+'&end_date='+dateN;
	ajaxFunctions.request('put',url,callback);
}
addBut.firstChild.addEventListener('submit',add);
function delet(id){
	//delet_content(id)
	delete cache[id];
	id = id.replace('_inf','');
	symbolArr.splice(symbolArr.indexOf(id),1);
	//remove the symbol in db
	//set click on span element
	function callback(json){
		console.log('the stock (whose symbole is '+json.symbol+') is removed successfully.');
	}
	var url = '/delete?symbol='+id;
	ajaxFunctions.request('delete',url,callback);
}
function delet_content(id){
	//remove the node 
		var div = document.getElementById(id);
		id = id.replace('_inf','');
		var g = document.getElementById(id);
		(g.parentNode).removeChild(g);
		(div.parentNode).removeChild(div);
		
}