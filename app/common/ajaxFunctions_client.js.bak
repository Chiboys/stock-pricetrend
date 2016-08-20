var ajaxFunctions = {
	ready: function(fn){
		if(typeof fn !== 'function'){
			return console.log('ajaxFunction_client\'s param isn\'t a function');
		}
		if(document.readyState === 'complete'){
			return fn();
		}
		document.addEventListener('DOMContentLoaded',fn,false);
	},
	request:function(method,url,callback){
		var xml = new XMLHttpRequest();
		xml.onreadystatechange = function(){
			if(xml.readyState === 4 && xml.status === 200){
				var data = JSON.parse(xml.responseText);
				//confirm the data is not null
				//if null,will skip the callback.
				if(data.value === null){
					message.innerHTML = data.message;
					end = false;
					return console.log('the request returns the information : return null at ajaxFunctions_client.js');

				}else{
					//when data.value is array,send arr to callback
						callback(data.value);
				}
			}
		}
		xml.open(method,url,true);
		xml.send();
	}
};