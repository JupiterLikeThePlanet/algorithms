// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// For example:

// var myArray     = [3, 4, 6, 10, 11, 15];
// var alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pseudocode
// create a function called sort array that takes 2 arrays as it's parameters
// add both arrays into one array called unsorted array
// unsorted array will then enter a loop that compares the numbers next to it (e.g. is a > b or b < a)
	// select one element in the array that changes once per loop and compare it with elements that change everytime with
	// if element y is greater or equal than element x, splice behind it 
// The lesser amount will be pushed into new array, sorted array.  


var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];


function sort_array(arr1, arr2) {

	// [3, 4, 6, 10, 11, 15, 1, 5, 8, 12, 14, 19]
	var unsorted_array = arr1.concat(arr2);
	var original_length = unsorted_array.length
	var sorted_array = [];

	console.log("starting array: " + unsorted_array)
	for (var i = 0; i < unsorted_array.length ; i++) {

		var static_element = unsorted_array[i]

		// gives me index numbers
		sorted_array.unshift(static_element)
		console.log("popped: " + unsorted_array.splice(i, 1));
///////////////////////// new ///////////////////////////////////////////////////
		for (x in unsorted_array) {
			var dynamic_element = unsorted_array[x]
			console.log("static_element: " + static_element)
			console.log("x: " + x)
			console.log ("dynamic_element: " + dynamic_element)

			if (static_element <= dynamic_element) {

				var index_of_dynamic_element = unsorted_array.indexOf(dynamic_element)

				unsorted_array.splice(index_of_dynamic_element, 0, static_element)
				
				console.log("if array: " + unsorted_array)
				// x += 1
				break
			}else{
				continue
			}


//////////////////////////// original //////////////////////////////////////////
		// for (x in unsorted_array) {
		// 	var dynamic_element = unsorted_array[x]
		// 	console.log("static_element: " + static_element)
		// 	console.log("x: " + x)
		// 	console.log ("dynamic_element: " + dynamic_element)

		// 	if (static_element <= dynamic_element) {

		// 		var index_of_dynamic_element = unsorted_array.indexOf(dynamic_element)

		// 		unsorted_array.splice(index_of_dynamic_element, 0, static_element)
				
		// 		console.log("if array: " + unsorted_array)
		// 		// x += 1
		// 		break
		// 	}else{
		// 		continue
		// 	}
///////////////////////////////////////////////////////////////////////////////////
		};
		console.log("-----------------------------------------------------------------")
		console.log("array length: " + unsorted_array.length)
		console.log("original length: " + original_length)
		console.log("-----------------------------------------------------------------")

		//smallest value is saved and pushed into array here

		// if (unsorted_array.length < original_length) {
		// 	for (x in unsorted_array) {
		// 	var dynamic_element = unsorted_array[x]
		// 	console.log("static_element: " + static_element)
		// 	console.log("x: " + x)
		// 	console.log ("dynamic_element: " + dynamic_element)

		// 	if (static_element >= dynamic_element) {

		// 		var index_of_dynamic_element = unsorted_array.indexOf(dynamic_element)

		// 		unsorted_array.splice(index_of_dynamic_element, 0, static_element)
				
		// 		console.log("if array: " + unsorted_array)
		// 		// x += 1
		// 		break
		// 	}
		// 	// unsorted_array.splice(0, 0, static_element)
		// 	// unsorted_array.unshift(static_element)
		// 	console.log("smallest: " + static_element )
		// }

		console.log("***********************************")
	};
		// unsorted_array.reverse()
		console.log("End: " + unsorted_array);

};


sort_array(myArray, alicesArray);

