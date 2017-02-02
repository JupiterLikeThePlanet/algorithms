//// The Actual Better Way
function isEqual(a, b) {

	var propsA = Object.getOwnPropertyNames(a)
	var propsB = Object.getOwnPropertyNames(b)

	if (typeof a != typeof b) {
		console.log("a type: " + typeof a)
		console.log("b type: " + typeof b)
		console.log("false by way of type")
		return false
	}else if (propsA.length != propsB.length) {
		console.log("a length: " + a.length)
		console.log("b length: " + b.length)
		console.log("false by way of length")
		return false
	}else{
		for (var i = 0; i < propsA.length; i++ ){
			var property = propsA[i]
			console.log("a[property]: " + a[property])
			console.log("b[property]: " + b[property])
			console.log(propsA[i])

			if (a[property] !== b[property]) {
				console.log("false")
				return false
			}else{
				continue
			}
		}
		console.log("true")
		return true
	}



};


var objX = {
	zwanky: "banana",
	zef: "rama"
};

var objY = {
	zwanky: "banana",
	zefe: "bama"
}


isEqual(objX, objY);  






/////////////////////////////////////////////////////////////////////////
//// MY ORIGINAL WAY

// function isEqual(a, b) {

// 	if (typeof a != typeof b) {
// 		console.log("a type: " + typeof a)
// 		console.log("b type: " + typeof b)
// 		console.log("false by way of type")
// 		return false
// 	}else if (a.length != b.length) {
// 		console.log("a length: " + a.length)
// 		console.log("b length: " + b.length)
// 		console.log("false by way of length")
// 		return false
// 	}else{
// 		for (var i = 0; i < a.length; i++ ){
// 			// console.log("hit")
// 			var ai = a[i]
// 			var bi = b[i]
// 			var splitA = ai.split("")
// 			var splitB = bi.split("")
// 			console.log("a split: " + splitA)
// 			console.log("b split: " + splitB)

// 			// if(a[i] != b[i]) {
// 			for(var x = 0; x < splitA.length ; x++) {
// 				// console.log("hit")
// 				if (ai[x] != bi[x]) {
// 					console.log("ai[x]: " + ai[x])
// 					console.log("bi[x]: " + bi[x])
// 					console.log("false")
// 					return false
// 				}else{
// 					continue
// 					// console.log("true")
// 				}
// 			}
// 		};
// 		console.log("true")
// 		return true
// 	}



// };

// var obj = {
// 	prop: []
// };

// // console.log(obj.prop)
// console.log("************************")
// // Tests for object type, true
// console.log('isEqual([] , obj.prop);')
// isEqual([] , obj.prop);
// console.log("************************")

// // Tests for object type, false
// console.log('isEqual(" ", [])')
// isEqual(" ", [])
// console.log("************************")

// // Tests for one object in array, false
// console.log('isEqual(["abc"], ["abd"])')
// isEqual(["abc"], ["abd"]);



