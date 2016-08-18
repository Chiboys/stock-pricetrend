var stockInf = function(json){
	var div = document.createElement('div');
	var symbol = document.createElement('h2');
	var inf = document.createElement('p');
	var delet = document.createElement('span');
	var li = document.createElement('li');
	var id = json.symbol+'_inf';
	div.setAttribute('id',id);
	symbol.innerHTML = json.symbol;
	inf.innerHTML = json.name;
	li.classList.add('fa','fa-trash-o','fa-5x');
	delet.appendChild(li);
	delet.setAttribute('onclick','delet("'+id+'")');
	div.appendChild(symbol);
	div.appendChild(delet);
	div.appendChild(inf);
	stocks.insertBefore(div,addBut);
		//add the new symbol to symbol array
	symbolArr.push(json.symbol);
}