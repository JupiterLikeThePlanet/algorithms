//INPUT: Number of Parts (integer), Array of Parts (array of integers)

//OUTPUT: minimal possible time of N parts to be put together (integer)

// notes: parts can only put together 2 at a time
//        time and size are correlated
//        time = pt size + pt size
//        newPartSize = pt size + pt size
//        ??? time = newPartSize ??? probably not
//        "optimal merge" uses middle out parsing

// - create a function called estimateTime that takes an integer (Number of Parts) and array of integers representing each part size as it 's params
// nix - create a var called updatedArr equal to empty array []
// - create a var called origArr equal to empty array part size array param
// nix - create a var called arrLength equal to numOfParts divided by 2 and ceil (Math.ceil()) the dividend
// - create a while loop that runs until origArr length is equal to one
// - inside the while loop
//   -> create a var called 'half' equal the length  origArr equal to numOfParts divided by 2 and ceil (Math.ceil()) the dividend
//   -> add origArr[partsArr divided by 2 and ceil] with origArr[(partArr divided by 2 and floor - 1)] and place into variable called 'sum'
//   -> Using splice function, pop arr[partsArr divided by 2 and ceil], deleting 1 item and adding the 'sum'
//   -> Use splice function again to remove arr[(numOfParts divided by 2 and floor - 1)] at the index before the half, don't add anything
//   -> 
// - return origArr 
//
//
//


// function estimateTime(numOfParts, partsArr) {
//     var origArr = partsArr
//     var time = 0
//     while(origArr.length > 1) {
//         var half = Math.ceil(origArr.length/2)
//         var sum = origArr[half] + origArr[half-1]
//         // var half = Math.floor(origArr.length / 2)
//         // var sum = origArr[half] + origArr[half + 1]
//         console.log("time before sum: " + time)
//         time = time + sum
//         origArr.splice(half, 1, sum)
//         origArr.splice(half-1, 1)
//         // origArr.splice(half + 1, 1)
//         console.log(origArr)
//         console.log('time: ' + time)
//     }
//     // console.log("our answer: " + origArr)
//     console.log('end time: ' + time)
//     return origArr
// }

function estimateTime(numOfParts, partsArr) {
    var origArr = partsArr
    var time = 0
    while (origArr.length > 1) {
        var half = Math.floor(origArr.length / 2)
        // if (origArr.length > 2) {
            var sum = origArr[half-1] + origArr[half]
        // }else{
        //     var sum = origArr[half - 1 ] + origArr[half]
        // }

        if (half%2 === 1) {
            sum = origArr[half] + origArr[half + 1]
        }else{
            sum = origArr[half] + origArr[half - 1]
        }

        console.log("time before sum: " + time)
        time = time + sum
        origArr.splice(half-1, 2, sum)
        console.log(origArr)
        console.log('time: ' + time)
    }

    console.log('end time: ' + time)
    return origArr
}


estimateTime(4, [20,4,8,2])
console.log('Expected Return Value: 54')

estimateTime(6, [1,2,5,10,35,89])
console.log('Expected Return Value: 224')
