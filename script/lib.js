"use strict";

/**
* Fungsi untuk meload data json
* @param {String}	url_string data/album.json
*/
var load_data = function(data){
	var promise = new Promise( 
		function(resolve, reject){
			var ajax = new XMLHttpRequest();

			ajax.open("GET",data,true);
			ajax.send();

			ajax.onload = function(){
				if(this.status == 200)
					resolve(JSON.parse(this.response));
				else
					reject(this.statusText);
			}

			ajax.onerror = function(){
				reject(this.statusText);
			}
		}
	);

	return promise;
}

/**
* Fungsi merandom array
* @param {Array}
*/
var shuffle = function(array){
	var currentIndex = array.length;
	var temporary;
	var randomIndex;

	while(0 != currentIndex){
		randomIndex = Math.floor(Math.random()*currentIndex);
		currentIndex -= 1;

		temporary = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporary;
	}
}