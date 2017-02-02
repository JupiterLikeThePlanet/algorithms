// function permutations(str){
// 	var arr = str.split("");
// 	var arrLength = arr.length;
// 	var perms = 0;
// 	var permArr = [];

// 	while (arrLength > 0) {
// 		perms = arrLength * (arrLength - 1)
// 		arrLength =- 1
// 	};
// 	arrLength = arr.length;



// 	for (var i = 0; arr[i] ; i++) {
		
// 		copyArr = Object.create(arr);
// 		picked = copyArr.splice(i, 1);
// 		console.log(picked);
// 	// 	// console.log(arr[i])
// 	// 	for(var x = 0 ; x < arrLength ; x++) {
// 	// 		var permArr = [arr[i]];
// 	// 		console.log("X = " + x)
// 	// 		console.log("permArr b4 if statement: " + permArr )
// 	// 		if (arr[x] === arr[i]){
// 	// 			console.log("arr[x]: " + arr[x])
// 	// 			console.log("arr[i]: " + arr[i])
// 	// 			console.log("popped: " + arr.pop(arr[x]))
// 	// 		} else {
// 	// 			console.log("pushed: " + permArr.push(arr[x]))
				
// 	// 		};
// 	// 		console.log("@fter 'if' statement: " + permArr);
// 	// 		console.log("*****************************");
// 	// 	};
// 		// do { } while ();

// 			// var innerArr = [];
// 			// console.log("Arr: ")
// 	};


// };


function permutations(str){
var arr = str.split(''),
    len = arr.length, 
    perms = [],
    rest,
    picked,
    restPerms,
    next;

    if (len == 0)
        return [str];

    for (var i=0; i<len; i++)
    {
        rest = Object.create(arr);
        console.log("rest: "+ rest);
        picked = rest.splice(i, 1);

        restPerms = permutations(rest.join(''));
        console.log("restPerms: " + restPerms);

       for (var j=0, jLen = restPerms.length; j< jLen; j++)
       {
           next = picked.concat(restPerms[j]);
           console.log("**********"+ " j "+ j +" **********")
           console.log("next: " + next)
           perms.push(next.join(''));
           console.log("perms: " + perms)
           console.log("*************************")
       }
    }
   return perms;
}



permutations("ABC");