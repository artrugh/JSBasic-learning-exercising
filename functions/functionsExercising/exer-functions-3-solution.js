// //Q1. javascript-functions-1
// // Write a function hello(name) that logs:

// // Hello ______!
// // Where the blank is replaced by the argument name. For example:

// // hello("John")
// // will return "Hello John!"

// function Hello(name) { return `Hello ${name}!` }
// Hello("John")
// console.log(Hello("John"));


// // Q2. javascript-functions-2
// // Write a function square(x) in that takes a number as an argument and returns the square of that number.

// function Square(num) { return Math.sqrt(num) }
// console.log(Square(3));


// // Q3. age-calculator
// // Write a function named calculateAge that takes two arguments: birth year and current year.
// // The function should then calculate the two possible ages based on that year, and returns the result in the following format (replacing 'NN' with the possible years) 
// //: "You are either NN or NN."

// // Examples:

// // calculateAge(1987,2016);  // returns 'You are either 28 or 29.'

// function Age(year) {
//     let age = new Date().getFullYear() - year
//     return `You are either ${age} or ${age - 1}.`
// }

// console.log(Age(1987));

// // Q4. javascript-functions-4
// // Write a function xToNum(num) that takes as arguments two numbers: 
// // x and num and returns the sum of all numbers from x to num (including both). For example:

// // xToNum(4, 8)  // = 4 + 5 + 6 + 7 + 8 = 30
// // will return 30.

// sum = (num, limit) => {
//     debugger;
//     if (num === limit) return num
//     else { return num + sum(num + 1, limit) }
// }
// console.log(sum(4, 8));


// // Q5. count-the-arguments
// // Write a function named countTheArguments. 
// //If less than five numbers are passed in as arguments when the function is called, 
// //the function should return "Sorry, not enough arguments." 
// //If more than five numbers are passed in as arguments when the function is called, 
// //the function should return "Sorry, too many arguments." If exactly five arguments are passed in when the function is called,
// // the function should return the sum of the arguments.

// // Examples:

// // countTheArguments(1, 2, 3, 4);  // returns 'Sorry, not enough arguments'
// // countTheArguments(44, 21, 55, 33, 3, 4);  // returns 'Sorry, too many arguments'
// // countTheArguments(12, 1, 3, 5, 10);  // returns 31

// countTheArguments = (...args) =>
//     args.length > 5
//         ? "Sorry, too many arguments"
//         : args.length < 5
//             ? "Sorry, not enough arguments"
//             : args.reduce((acc, cur) => acc + cur);


// console.log(countTheArguments(1, 2, 3, 4));
// console.log(countTheArguments(1, 2, 3, 4, 5));
// console.log(countTheArguments(1, 2, 3, 4, 5, 6));



// Q6. javascript-functions-5
// Consider the following JavaScript code:

function increase(result = 0, num, count) {
    for (var i = 0; i < count; i++) {
        result += num
    }
    return result
}

function decrease(result = 0, num, count) {
    for (var i = 0; i < count; i++) {
        result -= num
    }
    return result;
}

//var result = 0;
result = increase(3, 3)
result = increase(3, 3) + decrease(2, 2)

console.log(result); // 5
// What will be the output of console.log(result)?

// Q7. temperature-converter
// Write two functions, one named celsiusToFahrenheit and the other named fahrenheitToCelsius. 
//celsiusToFahrenheit should take in a celsius temperature as an argument and convert it to fahrenheit. 
//Similarly, fahrenheitToCelsius should take in a fahrenheit temperature as an argument and convert it to celsius.

// Examples:

// celsiusToFahrenheit(30);  // returns 86
// fahrenheitToCelsius(32);  // returns 0



// Q8. javascript-functions-8-a
// Given the following javascript code:

function encode(digit1, digit2) {
    var code = "";

    function addZeroes(size) {
        for (var i = 0; i < size; i++) {
            code += "0";
        }
    }

    function addOnes(size) {
        for (var i = 0; i < size; i++) {
            code += "1";
        }
    }

    addZeroes(digit1);
    addOnes(digit2);

    return code;
}

var code = encode(3, 4);
console.log(code); // code  = 0001111
// what will be the output to the console?

// Q9. functionception

// Write a function called functionCeption that returns a new function. 
//When called, that new function should console logs out "Is all that we see or seem, But a dream within a dream?". 
//Neither function should take any arguments.

// Checkout the Inception wikipedia page if you're curious about the inspiration
// for this question. Also shoutout to Edgar Allen Poe for the quote.

// Examples:

function functionCeption() {
    console.log("Is all that we see or seem, But a dream within a dream?");

}
var dreamFunc = functionCeption();


// Q10. javascript-functions-6-a
// This is a two part assignment.

// Part 1
// Write a javascript function printElement(element, index) that takes as argument an element 
// of an array and an index. It then logs to the console:

// The index.
// The type of the element.
// The element itself.
// For example, after these two lines

// var arr = ["apple", "orange", "pear"]
// printElement(arr[0], 0)
// The following will be logged to the console:

// index: 0, type: string, value: "apple"


// this is a method

// class printElement {
//     constructor(element, index) {
//         this.index = index;
//         this.type = typeof element[index];
//         this.value = element[index];
//     }
// }
//const apple = new printElement(["apple", "orange", "pear"], 0)
//console.log(apple);

// this is a function
// printElement = (element, idx) => {
//     let obj = {
//         index: idx,
//         type: typeof element[idx],
//         value: element[idx]
//     }
//     return obj
// }
//console.log(printElement(["apple", "orange", "pear"], 0));

//this is a function

function printArrayElements(arr) {
    debugger;
    let arrObj = []
    arr.map((cur, idx) => {

        let obj = {
            index: idx,
            type: typeof cur,
            value: cur,
        }
        arrObj.push(obj);

    })
    return arrObj
}

//console.log(printArrayElements(["apple", "orange", "pear"]));

// this is a function

// printElement = (arr, idx = 0) => {
//     debugger;
//     if (arr.length - idx === idx) { return arr.slice(idx) }
//     else {
//         let obj = {
//             index: idx,
//             type: typeof arr[idx],
//             value: arr[idx]
//         }
//         arr.push(obj)

//         return arr + printElement(arr, idx + 1)
//     }
// }
// console.log(printElement(["apple", "orange", "pear"]));




// Part 2

// Write a function printArrayElements(arr) that takes an array as an argument.
// The function will traverse through the array, and for each element call the function printElement.

// For example, after these two lines:

// var arr = ["apple", "orange", "pear"]
// printArrauElements(arr)
// The following will be logged to the console:

// index: 0, type: string, value: apple
// index: 1, type: string, value: orange
// index: 2, type: string, value: pear

// =====================================================++++++++++++++


// Q11. javascript-functions-7
// You are given the following code:

// function forEach(arr, action) {
//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = action(arr[i])
//     }
//     return arr;
// }

// function addOne(num) {
//     return num + 1;
// }

// var arr = [0, 1, 2, 3, 4];
// const addOneArr = forEach(arr, addOne())
// console.log(addOneArr);

// function forEach(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] + 1
//     }
//     return arr;
// }

forEach = arr => arr.map(cur => cur + 1);

var arr = [0, 1, 2, 3, 4];
const addOneArr = forEach(arr);
//console.log(addOneArr);



// Write a single line of code that will result in each element of arr being increased by 1.
// After that line of code your code arr will look like this:

// [1, 2, 3, 4, 5]

// Q12. javascript-functions-8-a
// Given the following javascript code:

// function encode(digit1, digit2) {
//     var code = "";

//     function addZeroes(size) {
//         for (var i = 0; i < size; i++) {
//             code += "0";
//         }
//     }

//     function addOnes(size) {
//         for (var i = 0; i < size; i++) {
//             code += "1";
//         }
//     }

//     addZeroes(digit1);
//     addOnes(digit2);

//     return code;
// }

// var code = encode(3, 4);
// console.log(code);

// what will be the output to the console? //code:0001111



// Q13. javascript-functions-9-a
// Given the following javascript code:

function encode(digit1, digit2, digit3) {
    var code = "";

    function addZeroes(size) {
        for (var i = 0; i < size; i++) {
            code += "0";
        }
    }

    function addOnes(size) {
        for (var i = 0; i < size; i++) {
            code += "1";
        }
    }

    for (var i = 0; i < digit3; i++) {
        addZeroes(digit1);
        addOnes(digit2);
    }

    return code;
}

var code = encode(3, 4, 2); 00011110001111
//console.log(code);


// Q14. product-of-all-other-numbers
// You have an array of integers, and for each index you want to find the product
// of every integer except the integer at that index. Write a function getProductsOfAllIntsExceptAtIndex() 
//that takes an array of integers and returns an array of the products. 
//However, do not use division in your answer.

// For example:

// getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]); //returns [84, 12, 28, 21]
// In other words, to get to the above answer your function would need to calculate: [7*3*4, 1*3*4, 1*7*4, 1*7*3]



//console.log(getProductsOfAllIntsExceptAtIndex([84, 12, 28, 21]));

// getProductsOfAllIntsExceptAtIndex = arr => {
//     debugger;
//     let newArr = []

//     for (i = 0; i < arr.length; i += 1) {
//         let result = 1;
//         console.log(i, "i", arr[i]);

//         for (z = 0; z < arr.length; z += 1) {
//             console.log(z, "z", arr[z]);

//             if (i !== z) {
//                 result *= arr[z]
//                 console.log(result, "result", arr);

//             }
//         } newArr.push(result)
//     } return newArr
// }


// console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));



// ###Q15. highest-product-of-3

// Given an array of integers as an argument, write a function called highestProduct
// that should return the highest product you can get from any three of the integers.
// Watch out for negative numbers....

// Examples:

// highestProduct([1, 3, 2, 5, 6]); //returns 90 (by multiplying 6 * 5 * 3)
// highestProduct([-10, 5, -10, 5, 10]); //returns 1000 (by multiplying -10 * -10 * 10)

highestProduct = arr => {

    let newArr = arr.map(cur => Math.abs(cur)).sort((a, b) => b - a);
    let result = 1;
    for (i = 0; i < 3; i += 1) {
        result *= newArr[i]
    }
    return result
}


// console.log(highestProduct([-10, 5, -10, 5, 10]));


