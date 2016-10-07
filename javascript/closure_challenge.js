//Pseudocode
//Input:
//Output:

//create an outer function
//create

//Question:

var once = function(myFunction){
  var counter = 0
  function storedFunction(x){
    if(counter < 1){
      counter++
      myValue = myFunction(x)
      return myValue
    }else{
      return myValue
    }
  }
  return storedFunction
};
    // var ranOnce = false
    // function storedFunction(){
    //   if(ranOnce === false){
    //     ranOnce = true;
    //     myFunction;
    //     }
    //   return myFunction();
    //   }
    // };

// var once = function(myFunction){
//     completed = false;
//     return function(){
//       if(completed === false){
//       //console.log("1st: ", completed);
//       completed = true;
//       //console.log("2nd: ", completed);
//       return myFunction
//         }
//       }
//     };

    // if(completed === false){
    //   completed = true
    //   return myFunction;
    //     }
    // };  6, 11

//     // return function() {
//     //   if(completed === false){
//     //   completed = true;
//     //     }
//     //   }
//     // };

var increment = function(num) { return num + 1; };
var incrementOnce = once(increment);

//console.log(incrementOnce)


console.log(incrementOnce(5));
console.log(incrementOnce(10));
console.log(incrementOnce(4));
console.log(incrementOnce(9001));



//console.log(incrementOnce)

// var once = function(myFunction){
//     var completed = false;
//     return function(){
//       if(completed = false){
//       //console.log("1st: ", completed);
//       var completed = true;
//       //console.log("2nd: ", completed);
//       return myFunction
//         }
//       }
//     };

// var something = function(myfunction) {
//     var executed = false;
//     return function() {
//         if (!executed) {
//             executed = true;
//             return myFunction()
//         }
//     };
// };

// var increment = function(num) { return num + 1; };
// var incrementOnce = once(increment);


// console.log(incrementOnce(5));
// console.log(incrementOnce(10));