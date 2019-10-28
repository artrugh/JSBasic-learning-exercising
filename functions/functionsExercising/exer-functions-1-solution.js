
// Without modifying the existing code you see, but only changing the order 
// and adding the necessary curly braces wherever needed, rewrite the solution 
// to the famous FizzBuzz problem so it doesn't accept only one given number, but 
// loops and does the same for all numbers (integers) from 1 to 100 (100 included!)

// CONVERT THIS LOOP IN A FUNCTION!!


// let currentNum = 1
// let endNum = 100

// while (currentNum <= endNum) {

//     if (currentNum % 3 === 0 && currentNum % 5 === 0) {

//         console.log('FizzBuzz');

//     }

//     else if (currentNum % 3 === 0) {

//         console.log(`Fizz`)

//     }

//     else if (currentNum % 5 === 0) {

//         console.log('Buzz')
//     }

//     else {

//         console.log(`${currentNum}`)

//     }

//     currentNum++
// }

// function fizzBuzz(currentNum, endNum) {

//     let statement = "";

//     while (currentNum <= endNum) {

//         if (currentNum % 3 === 0 && currentNum % 5 === 0) {

//             statement = 'FizzBuzz'
//             return (statement)       

//         }

//         else if (currentNum % 3 === 0) {

//             statement = 'Fizz'
//             return (statement);

//         }

//         else if (currentNum % 5 === 0) {

//             statement = 'Buzz'
//             return (statement)
//         }

//         else {

//             return (`${currentNum}`)

//         }

//         currentNum++
//     }

// }

// console.log(fizzBuzz(15, 100));


// function fizzBuzz(currentNum, endNum) {

//     while (currentNum <= endNum) {

//         if (currentNum % 3 === 0 && currentNum % 5 === 0) {

//             console.log(`${currentNum} FizzBuzz`);

//         }

//         else if (currentNum % 3 === 0) {

//             console.log(`${currentNum} Fizz`)

//         }

//         else if (currentNum % 5 === 0) {

//             console.log(`${currentNum} Buzz`)
//         }

//         else {

//             console.log(`${currentNum}`)

//         }

//         currentNum++
//     }

// }

// fizzBuzz(5, 50);



// Write a function that accepts a number from 1 to 100 as a result of a test you gave to your students.

// If the result is lower than 50 then print Not Pass! Try again next time.

// If it is between 50-60 print the grade D.

// If it is between 61-80 print the grade C

// If it is between 81-90 print the grade B

// If it is between 91-98 print the grade A

// If it is 99 print 'Almost perfect'

// If it is 100 'Take a day-off tomorrow'

// Put different values and call the function multiple times to check your result.


// function grade(result) {


//     if (result < 50) {

//         console.log(`${result} Not Pass! Try again next time.`);

//     }

//     else if (result <= 60) {

//         console.log(`${result} D`)

//     }

//     else if (result <= 80) {

//         console.log(`${result} C`)
//     }

//     else if (result <= 90) {
//         console.log(`${result} B`);

//     }

//     else if (result <= 98) {
//         console.log(`${result} A`);

//     }

//     else if (result === 99) {

//         console.log(`${result} Almost Perfect`);

//     }

//     else {

//         console.log(`${result} Take a day off tomorrow!`)

//     }

// }

// grade(50);


// Write a function that accepts any number and returns it's square value.

// Don't forget to validate always before that the accepted input of the function
// is always number. If not print an appropriate message to the console to inform 
// the user that this action is not possible and prevent further code from running.


// function square(number) {

//     if (typeof number != 'number') {
//         console.log('This is not a proper number!');
//     }

//     else {
//         console.log(Math.sqrt(number))

//     }
// }

// square("Hola");

// function square(number) {

//     if (typeof number != 'number') {
//         return 'This is not a proper number!';
//     }

//     else {
//         return Math.sqrt(number);

//     }
// }

// let example = square("Hola");
// console.log(example);


// make a function to convert celsius 

// function celsiusFahrenheit(celsius) {


//     return celsius * 9 / 5 + 32;

// }

// let fahrenheit = celsiusFahrenheit(35);
// console.log(fahrenheit);



function minMax(numbers) {

    return Math.max.apply(Math.numbers);
    //     //return Math.min(numbers);
}

//let array = [3, 5, 6, 1, 2];
//console.log(typeof array);

let result = minMax(3, 5, 6, 1, 2);
console.log(result);

