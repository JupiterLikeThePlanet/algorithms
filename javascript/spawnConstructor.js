// acts like 'new' 

function User (name) {
	this.name = name
};

User.prototype.showName = function(){
	console.log("User name is " + this.name)
}

function spawn (constructor) {
	var obj = {};
	Object.setPrototypeOf(obj, constructor.prototype); //outputs: User {}
	//ECMA 6
	var argsArr = Array.from(arguments)
	// console.log(argsArr) ////outputs: [ [Function: User], 'jupiter' ]
	constructor.apply(obj, argsArr.slice(1));

	//ECMA 5
	// var argsArr = Array.prototype.slice.apply(arguments)
	// console.log(argsArr); ////outputs: [ [Function: User], 'jupiter' ]
	// constructor.apply(obj, argsArr.slice(1))

	return obj
}

/// new
// var jupiter = new User("Jupiter");
// jupiter.showName();

//spawn
var jupiter = spawn(User, "jupiter")
console.log(jupiter)
jupiter.showName();