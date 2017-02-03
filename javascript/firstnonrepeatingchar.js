function firstNonRepeatingChar (string) {
	var deleteSpaces = string.replace(/ /g, ""),
		strLength = deleteSpaces.length,
		arr = Array.from(deleteSpaces),
		countObj = {};

	// console.log("string with no white space: " + deleteSpaces);
	// console.log("strLength: " + strLength);
	// console.log("arr: "+ arr);

	for (var i = 0 ; i < strLength ; i++) {		
		var element = arr[i]
		// console.log("element: "+ element)
		if (countObj[element]) {
			// console.log("******** if loop *********")
			countObj[element]++
			// console.log("countObj.element: " + countObj.element)
		} else {
			// console.log("********* else loop **********")
			countObj[element] = 1;
			// console.log("countObj.element: " + countObj.element)
		}
	};
	console.log("---------- Count Object ----------")
	console.log(countObj);

	for (var i = 0 ; i < strLength ; i++) {
		var element = arr[i]
		if (countObj[element] === 1) {
			console.log(" And your first non repeating character is: " + element)
			return element
		}
	}

}




firstNonRepeatingChar("the quick brown fox jumps then quickly blow air")