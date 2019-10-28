// // RECURSION    

// let counter = 5;

// while (counter > 0) {

//     console.log(counter--, 'counter');

// }

let countdown = function (value) {


    if (value > 0) {

        // console.log(value, "value");
        return countdown(value - 1);

    } else { return value }


}


console.log(countdown(5));



//  FACTORIAL EXAMPLE

// const factor = function (num) {

//     let result = 1;
//     let count;


//     for (count = num; count > 1; count--) {
//         result *= count;
//         console.log(result, "result", count, "count");

//     }

//     return result;

// }

// console.log(factor(5));

// EXAMPLE WITH RECURSION

// const factor = function (num) {

//     if (num <= 0) {

//         // terminal case
//         return 1;
//     } else {
//         // block to execute
//         return num * factor(num - 1);

//     }
// }

// console.log(factor(5));


// STATE - the value of a variable at a given point in time.


// const factor = num => {

//     if (num <= 0) {

//         // terminal case
//         return 1;
//     } else {
//         // block to execute
//         return num * factor(num - 1);

//     }

// }

// console.log(factor(5));

// const factor = num => num <= 1 ? 1 : num * factor(num - 1);

// console.log(factor(5));

// CLOSURES

// function hello() {

//     function multiply(a, b) {
//         return a * b;
//     }

//     return `Hello ${multiply(10, 3)}`;

// }
// console.log(hello());


// IIFE = immediately invoked function expression
// SIF = self invoked anonymous function


// (function () {

//     console.log('hello');

//     return 'Hello';

// })();

// (function () {
//     let foo = 'bar';
//     console.log(foo);
// })();


// (() => {
//     let foo = 'bar';
//     console.log(foo);
// })();

// (function () {
//     let x = 10;
//     let y = 20;
//     let answer = x + y;
//     console.log(answer);
// })();



var saved = {};
function fib(n) {
    //base case
    if (n === 1 || n === 0) {
        saved[n] = 1;
        //have we already saved this function call?
    } else if (!saved[n]) {
        //if we haven't already saved it, we save it here
        saved[n] = fib(n - 1) + fib(n - 2)
        console.log(saved[n], n);

    }
    //return our saved result
    return saved[n];
}

//fib(5);

function fibRecursive(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibRecursive(n - 2) + fibRecursive(n - 1);
    }
}

console.log(fibRecursive(10));

console.log(fib(10));