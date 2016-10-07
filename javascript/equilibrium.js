// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var equilibrium = [];
    var sumFor = 0;
    var sumRev = 0;

    // A A.reverse()
    console.log('before first FOR')
    console.log(A.length)
    for (var x = 0; x < A.length; x++) {
        console.log('inside first FOR')
        console.log(A[x]);
    //edge cases
        if A[0] || A[A.length]{

        }




        if (A[x - 1] === true) {
            console.log('A[x - 1]')
            for (i = 0; A[i] === A[x]; i++) {
                sumFor += A[i];
            }
        if (A[x + 1] === true) {
            console.log('A[x + 1]')
            for (i = 0; A[i] === A[x]; i--) {
                sumRev += A[i];
            }
        }

        if (sumFor === sumRev) {
            equilibrium.push(A.indexOf(x));
            console.log(equilibrium);
        }
    }

    // return -1
    }
}



solution([-7, 1, 5, 2, -4, 3, 0])