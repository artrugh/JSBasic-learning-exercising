//Recursion Exercises

// Multiply array
// Write a function called multArr that takes in an array of numbers as an
// argument and recursively multiplies together all of the values in the array.

multArr = (arr, i = 0) => {

    let mult = 1;

    if (i === arr.length) {

        return mult


    } else {

        return mult *= arr[i] * multArr(arr, i + 1)

    }
}

// console.log(multArr([2, 2, 2]));

//  multArr = arr => {
//     debugger;
//     if (arr.length === 1) return arr[0];
//     else return arr[0] * multArr(arr.slice(1));
// }
// console.log(multArr([2,3,4]));

// NO DIVIDING // =============

// a recursion doesn't work in this case.

// divArr = arr => {
//     debugger;
//     if (arr.length === 1) return arr[0];
//     else return arr[0] / divArr(arr.slice(1));
// }
// console.log(divArr([2,3,4]));


sumArr = (arr, i = 0) => {

    let sum = 0;

    if (i === arr.length) {

        return sum

    } else {

        return sum += arr[i] + sumArr(arr, i + 1)

    }
}

// console.log(sumArr([2, 2, 2]));


// ================================================ // ================================================


// Concatenate array
// Write a function called concatArr that takes in an array of strings as an argument 
//and recursively concatenates the strings together into a single string, with spaces between each original string.

// concatArr(['is', 'it', 'tomorrow']); // returns 'is it tomorrow'
// concatArr(['or', 'just', 'the', 'end', 'of', 'time']); //returns 'or just the end of time'

concate = (arr, i = 0) => {

    let str = "";

    if (i === arr.length) {

        return str

    } else {

        return str.concat(" " + arr[i]) + concate(arr, i + 1)
    }
}

//console.log(concate(["yo", "esto", "no"]));


// concatArr = arr => { debugger;
//     if (arr.length === 1) return arr[0];

//     else return arr[0] + ' ' + concatArr(arr.slice(1));
// }

// console.log(concatArr(["yo", "no", "quiero"]));


// ================================================ // ================================================

// Sum evens
// Write a function called sumEvens that takes in an array of numbers as an argument 
//and recursively sums only the even numbers in the array.

// sumEvens([2, 3, 5, 6]); // returns 8
// sumEvens([10, 5, 1, 2, 12]); //returns 24

// sumEven = (arr, i = 0) => {

//     let sum = 0;

//     if (i === arr.length) {

//         return sum

//     } else {

//         if (arr[i] % 2 === 0) {

//             return sum += arr[i] + sumEven(arr, i + 1)

//         } else {

//             return sum + sumEven(arr, i + 1)
//         }
//     }
// }


sumEvens = arr => {
    if (arr.length === 1) {
        return arr[0] % 2 === 0 ? arr[0] : 0;
    }
    else {
        var numToAdd = arr[0] % 2 === 0 ? arr[0] : 0;
        return numToAdd + sumEvens(arr.slice(1));
    }
}
//console.log(sumEvens([2, 2, 3, 6]));


// ================================================ // ================================================ //


// Square and multiply
// Write a function called squareAndMultiply that takes in an array of numbers,
// squares each number, multiplies all of the squared numbers together, and returns the product:

// squareAndMult([1, 2, 3]); // returns 36
// squareAndMult([5, 10]); //returns 2500


// squareAndMultiply = (arr, i) => {

//     let mult = 1;

//     if (i === arr.length) {

//         return mult


//     } else {

//         return mult *= Math.pow(arr[i], 2) * squareAndMultiply(arr, i + 1)

//     }
// }


squareAndMultiply = arr => {
    debugger;

    if (arr.length === 1) {

        return Math.pow(arr[0], 2)


    } else {

        return Math.pow(arr[0], 2) * squareAndMultiply(arr.slice(1))

    }
}

console.log(squareAndMultiply([5, 10]));

function squareAndMult1(array) {
    if (array.length === 1) {
        return Math.pow(array[0], 2);
    }
    else {
        return Math.pow(array.shift(), 2) * squareAndMult1(array);
    }
}
console.log(squareAndMult1([5, 10]));


// ================================================ // ================================================ //


// Recursive range
// Write a function called range which takes in two numbers (num1, num2) as arguments. 
//The function should return an array of numbers between num1 and num2.

// range(2,10); // returns [2, 3, 4, 5, 6,7, 8, 9, 10]
// range(17,20); // returns [17, 18, 19, 20]

// range = (num1, num2, arr) => {

//     if (num1 === num2) {

//         return arr.push(num1) + arr
//     }
//     else if (num1 < num2) {

//         console.log(num1, arr);
//         return arr.push(num1) + range(num1 + 1, num2, arr)
//     }
//     else if (num2 < num1) {

//         console.log(num2, arr);
//         return arr.push(num2) + range(num2 + 1, num1, arr)
//     }
// }

const range = (num1, num2) => {
    if (num1 === num2) return [num2];
    else return [].concat([num1]).concat(range(num1 + 1, num2));
}

// console.log(range(2, 10));

// console.log(range(2, 10, []));

const rangeSpread = (num1, num2) => {
    if (num1 === num2) return [num2];
    else return [num1, ...range(num1 + 1, num2)];
}

// ================================================ // ================================================ //

// Count the vowels
// Write a function called countVowels that takes in a string and returns an object with the count of the number of vowels in the string:

// countVowels('this is a test'); // returns {'a': 1, 'e': 1, 'i': 2, 'o': 0, 'u': 0}
// countVowels('another one'); //returns {'a': 1, 'e': 2, 'i': 0, 'o': 2, 'u': 0}


vowelCount = (str, i = 0, obj = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }) => {

    debugger;
    str.split("").filter(x => x.match(/[aeiou]/gi));


    if (i === str.length) {

        return obj

    } else {

        return (obj[str[i]] + 1) + vowelCount(str, i + 1, obj);

    }
}

//console.log(vowelCount("hola"));

// DOESN'T WORK



// countVowels = (str, obj = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }) => {
//     debugger;
//     if (str.length === 0) return obj;
//     if (obj[str.charAt(0)] !== undefined) obj[str.charAt(0)]++;
//     return countVowels(str.slice(1), obj);
// }
// console.log(countVowels('this is a test', { a: 0, e: 0, i: 0, o: 0, u: 0 }));


// ================================================ // ================================================ //



// Add and multiply
// Write a function called addAndMult that takes in an array of nubers and returns an object with two properies:
// 'sum', which has the sum of the array, and 'product', which has the product of the array:

// addAndMult([1, 2, 3, 4, 5]); // returns {'sum': 15, 'product': 120}
// addAndMult([10, 10, 10]); // returns {'sum': 30, 'product': 1000}

//let SumProduct = 

// addAndMult = (arr, i, obj) => {

//     let mult = 1;
//     let sum = 0;

//     if (i === arr.length) {

//         obj.product + mult;
//         return mult

//     } else {

//         return (mult *= arr[i] * addAndMult(arr, i + 1, obj)), (sum += arr[i] + addAndMult(arr, i + 1, obj))

//     }
// }


addAndMult = (arr, obj = { 'sum': 0, 'product': 1 }) => {
    debugger;
    if (arr.length === 0) return obj;
    else {
        obj.sum += arr[0];
        obj.product *= arr[0];
    }
    return addAndMult(arr.slice(1), obj);
}

//console.log(addAndMult([1, 2, 3, 4, 5]));

// ================================================ // ================================================ //


// Factorial
// Write a function called calculateFactorial that takes in a number as arguments and returns the factorial of that number.
// A factorial is basically the product of all integers between that number and 1.

// For example, factorial of 5 would be: 5 x 4 x 3 x 2 x 1 = 120

// Factorial of 10 would be: 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 3,628,800

// (Factorials grow really fast and actually end up producing some of the largest numbers known in mathematics).

// Function examples:

// calculateFactorial(3); //returns 6
// calculateFactorial(4); //returns 24
// calculateFactorial(7); //returns 5040



const factorial = num => {
    if (num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
};

console.log(factorial(4));


// ================================================ // ================================================ //


// Triple Step
// A child is running up a staircase with n steps and can hop either 1 step 2 steps or 3 steps at a time.
//Write a function called 'tripleStep', that takes in an argument n that represents the number of steps in the staircase,
//and returns a count of how many possible ways the child can run up the stairs.

// tripleStep(3); //returns 4
// tripleStep(4); //returns 7
// tripleStep(5); //returns 13
// tripleStep(10); //returns 274
// Source: CTCI

const tripleStep = num => {
    if (num < 0) {
        return 0;
    } else if (num === 0) {
        return 1;
    }
    return tripleStep(num - 1) + tripleStep(num - 2) + tripleStep(num - 3);
};

// console.log(tripleStep(3)); //returns 4
// console.log(tripleStep(4)); //returns 7
// console.log(tripleStep(5)); //returns 13
// console.log(tripleStep(10)); //returns 274


// Coin Combos
// Given an infinite number of quarters, dimes, nickels, and pennies,
// write code to calculate the number of possible ways of giving exact change for n cents.

// In other words, write a function called coinCombos
// that takes in one argument: n, which represents the total amount of money (in cents)
// that you need to make change for. Your function should return the amount of possible 
//combinations you can make to return that exact amount of change.

// For example:

// coinCombos(5); //returns 2
// coinCombos(10); //returns 4
// coinCombos(25); //returns 13
// coinCombos(60); //returns 73