// Math Object 
// Using Math Object in JavaScript! Print your answers to the console.
// Math Object

// 1. Random Number
// Create a function to return a random integer.

function RandomNum() {
    return Math.ceil(Math.random() * 20)
}

const randomNum = RandomNum();
//console.log(randomNum);


// 2. Lowest Number
// Create a function that takes an array as an argument and returns the number with the lowest value.

function MinArray(arr) {
    return Math.min(...arr)
}

//console.log(MinArray([5, 4, 5, 2, 7]));


// 3. The Power Of
// Create a function that takes two numbers as arguments. Return the value of the first number to the power of the second number.

function PowerOf(num1, num2) {
    return num1 * Math.pow(num2, 2)
}
//console.log(PowerOf(3, 4));

// 4. Highest Number
// Create a function that takes an array as an argument and returns the highest number in that array.

function MaxArray(arr) {
    return Math.max(...arr)
}

//console.log(MaxArray([45, 34, 53]));

// 5. Pi
// Create a function that given a number n, returns PI to n decimal places. Examples:

// myPi(5) ➞ 3.14159 //5 decimal places
// myPi(4) ➞ 3.1416 //4 decimal places
// myPi(15) ➞ 3.141592653589793 // 15 decimal places
// Bonus

function PiFixedTo(num) {
    return Math.PI.toFixed(num)
}

//console.log(PiFixedTo(4));


// Random Name
// Create a function for our webdev class 13b that returns a random student's name.

function FantasticFourteens() {
    return Math.ceil(Math.random() * 14)
}

//console.log(FantasticFourteens());