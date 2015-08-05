// PUT YOUR CODE HERE!!!
_ = {
	



average: function(array) {
		var output = 0;
		for (var i = 0; i< array.length; i++){
			output += array[i]; 
		}
		return output / array.length;
	},

contains: function(array, element) {
        var output = "";
    for (var i = 0; i < array.length; i++) {
        if(array[i] === element) {
            output = true; 
            break;
        } else {
            output = false;
        }
    }
    return output;
},


first: function(array) {
	return array[0];
}

last: function(array){
	var i = array.length -1;
	return array[i];
	
},

max: function(array) {
	var number = 0;
	for(var i = 0; i< array.length; i++) {
		if (array[i] > number) {
			number = array[i]
		}
	}
	return number;
},

min: function(array) {
	var number = array[0];
	for(var i = 0; i < array.length; i++) {
		if(array[i] < number) {
			number = array[i];
		}
		
	}
	return number;
},




 9 10 11

shuffle: function(array) {
  	var copy = [], n = array.length, i;
	while (n) {
   		i = Math.floor(Math.random() * n--);
		 copy.push(array.splice(i, 1)[0]);
  	}
	return copy;
},

sample: function(array, l) {
  	var copy = [], n = array.length, i;
	while (n) {
   		i = Math.floor(Math.random() * n--);
		 copy.push(array.splice(i, 1)[0]);
  	}
	return copy.splice(0, l);
},


difference: function(array1, array2) {
	var output = [];
	for(var i = 0; i < array1.length; i++) {
		for(var j =0; j < array2.length; j++) {
			if(array1[i] != array2[j]) {
				output.push(array2[j]);
			}
		}
	}
		return output;
},
//not correct ^^ but closest I've gotten so far

indexOf: function(array, specificNumber) {
	var output = "";
	for(var i = 0; i < array.length; i++) {
		if(array[i] == specificNumber) {
			output += i;
		} 
	}
	return output;
},

pluck: function(){


},
