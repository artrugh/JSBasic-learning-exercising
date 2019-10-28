
// Without modifying the existing code you see, but only changing the order 
// and adding the necessary curly braces wherever needed, rewrite the solution 
// to the famous FizzBuzz problem so it doesn't accept only one given number, but 
// loops and does the same for all numbers (integers) from 1 to 100 (100 included!)


let currentNum = 1
let endNum = 100

while (currentNum <= endNum) {

    if (currentNum % 3 === 0 && currentNum % 5 === 0) {

        console.log('FizzBuzz');

    }

    else if (currentNum % 3 === 0) {

        console.log(`Fizz`)

    }

    else if (currentNum % 5 === 0) {

        console.log('Buzz')
    }

    else {

        console.log(`${currentNum}`)

    }

    currentNum++
}