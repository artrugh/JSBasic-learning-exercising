// 1. Copy and paste these variables into your JavaScript file. In the commented section, write down which type you think each variable is. Check your answers by printing the types to the console.

let length = 16.78; //
let lastName = "Johnson"; //
let car = ""; //
let isOpen = true; //

console.log(typeof length, typeof lastName, typeof car, typeof isOpen);

// 2. Declare two variables called ageMark and ageJohn. Assign their ages - one age should be assigned as a string, the other as a number. Print the variables' data types to the console.

var ageMark = 'twenty'
var ageJohn = 30
console.log(typeof ageMark, typeof ageJohn);

// 3. Is John older than Mark? Declare a variable with a boolean value and print the following to the console eg. "John is older than Mark: true"

var real = 'true'
console.log('John is older than Mark: ' + real);

// 4. Declare a variable called x. Do not assign a value. Print x's data type to the console.

var x;
console.log(typeof x);

//5. Assign a string to x. Print x's data type again. 

x = 'true';
console.log(typeof x);

// 6. Print the last character of x's string to the console.

console.log(x.charAt(x.length - 1));

// 7. Print the length of x to the console, as well as the data type of x's length.

console.log(x.length + typeof (x.length));

//8. Declare three variables: a, b, c. Assign numbers to each of the variables. Check if the variable values are equal or not (e.g. console.log(a == b);). Do this for each possibility (a, b) (a, c), (b, c). Then, print the data type of this check to the console.

let a = 2
let b = 4
let c = 6
console.log(a == b, a == c, b == c);
console.log(typeof a, typeof b, typeof c);


// 9. What is the type of Infinity? Comment your answer. Print the type of infinity to the console.
let infinite = Infinity;
console.log(typeof infinity);

//10. Declare a variable. Assign the variable the value of a number or a string. Use the isNaN() method to check whether the variable is a number or not. Print "variable is NOT a number: true/false".

let val = 20;
console.log(isNaN(val));
let str = `${val} is NOT a number: ${isNaN(val)}`
console.log(str);

//11. Print the data type of isNaN(variable) to the console.

console.log(typeof isNaN(val));