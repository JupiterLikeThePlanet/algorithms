function isEqual(a, b) {

	if (typeof a != typeof b) {
		console.log("a type: " + typeof a)
		console.log("b type: " + typeof b)
		console.log("false by way of type")
		return false
	}else if (a.length != b.length) {
		console.log("a length: " + a.length)
		console.log("b length: " + b.length)
		console.log("false by way of length")
		return false
	}else{
		for (var i = 0; i < a.length; i++ ){
			var ai = a[i]
			var bi = b[i]
			var splitA = ai.split("")
			var splitB = bi.split("")
			console.log("a split: " + splitA)
			console.log("b split: " + splitB)

			// if(a[i] != b[i]) {
			for(var x = 0; x < splitA.length ; x++) {
				console.log("hit")
				if (ai[x] != bi[x]) {
					console.log("ai[x]: " + ai[x])
					console.log("bi[x]: " + bi[x])
					console.log("false")
					return false
				}else{
					continue
					// console.log("true")
				}
			}
		};
		console.log("true")
		return true
	}



};

// var obj = {
// 	prop: []
// };
// console.log(obj.prop)
// isEqual([] , obj.prop); 
// isEqual(" ", [])
isEqual(["abc"], ["abd"]); 