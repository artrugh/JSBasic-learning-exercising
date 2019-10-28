
// Without modifying the existing code you see, but only changing the order 
// and adding the necessary curly braces wherever needed, rewrite the solution 
// to the famous FizzBuzz problem so it doesn't accept only one given number, but 
// loops and does the same for all numbers (integers) from 1 to 100 (100 included!)

// CONVERT THIS LOOP IN A FUNCTION!!


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


// Write a function that accepts a number from 1 to 100 as a result of a test you gave to your students.

// If the result is lower than 50 then print Not Pass! Try again next time.

// If it is between 50-60 print the grade D.

// If it is between 61-80 print the grade C

// If it is between 81-90 print the grade B

// If it is between 91-98 print the grade A

// If it is 99 print 'Almost perfect'

// If it is 100 'Take a day-off tomorrow'

// Put different values and call the function multiple times to check your result.





// Write a function that accepts any number and returns it's square value.

// Don't forget to validate always before that the accepted input of the function
// is always number. If not print an appropriate message to the console to inform 
// the user that this action is not possible and prevent further code from running.


