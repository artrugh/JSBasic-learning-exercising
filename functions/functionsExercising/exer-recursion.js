// Recursion Exercises
// Multiply array
// Write a function called multArr that takes in an array of numbers as an argument and recursively multiplies together all of the values in the array.

// multArr([2, 3, 5]); // returns 30
// multArr([5, 5, 1, 2]); //returns 50
// Concatenate array
// Write a function called concatArr that takes in an array of strings as an argument and recursively concatenates the strings together into a single string, with spaces between each original string.

// concatArr(['is', 'it', 'tomorrow']); // returns 'is it tomorrow'
// concatArr(['or', 'just', 'the', 'end', 'of', 'time']); //returns 'or just the end of time'
// Sum evens
// Write a function called sumEvens that takes in an array of numbers as an argument and recursively sums only the even numbers in the array.

// sumEvens([2, 3, 5, 6]); // returns 8
// sumEvens([10, 5, 1, 2, 12]); //returns 24
// Square and multiply
// Write a function called squareAndMultiply that takes in an array of numbers, squares each number, multiplies all of the squared numbers together, and returns the product:

// squareAndMult([1, 2, 3]); // returns 36
// squareAndMult([5, 10]); //returns 2500
// Recursive range
// Write a function called range which takes in two numbers (num1, num2) as arguments. The function should return an array of numbers between num1 and num2.

// range(2,10); // returns [2, 3, 4, 5, 6,7, 8, 9, 10]
// range(17,20); // returns [17, 18, 19, 20]
// Count the vowels
// Write a function called countVowels that takes in a string and returns an object with the count of the number of vowels in the string:

// countVowels('this is a test'); // returns {'a': 1, 'e': 1, 'i': 2, 'o': 0, 'u': 0}
// countVowels('another one'); //returns {'a': 1, 'e': 2, 'i': 0, 'o': 2, 'u': 0}
// Add and multiply
// Write a function called addAndMult that takes in an array of nubers and returns an object with two properies: 'sum', which has the sum of the array, and 'product', which has the product of the array:

// addAndMult([1, 2, 3, 4, 5]); // returns {'sum': 15, 'product': 120}
// addAndMult([10, 10, 10]); // returns {'sum': 30, 'product': 1000}
// Factorial
// Write a function called calculateFactorial that takes in a number as arguments and returns the factorial of that number. A factorial is basically the product of all integers between that number and 1.

// For example, factorial of 5 would be: 5 x 4 x 3 x 2 x 1 = 120

// Factorial of 10 would be: 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 3,628,800

// (Factorials grow really fast and actually end up producing some of the largest numbers known in mathematics).

// Function examples:

// calculateFactorial(3); //returns 6
// calculateFactorial(4); //returns 24
// calculateFactorial(7); //returns 5040
// Triple Step
// A child is running up a staircase with n steps and can hop either 1 step 2 steps or 3 steps at a time. Write a function called 'tripleStep', that takes in an argument n that represents the number of steps in the staircase, and returns a count of how many possible ways the child can run up the stairs.

// tripleStep(3); //returns 4
// tripleStep(4); //returns 7
// tripleStep(5); //returns 13
// tripleStep(10); //returns 274
// Source: CTCI

// Coin Combos
// Given an infinite number of quarters, dimes, nickels, and pennies, write code to calculate the number of possible ways of giving exact change for n cents.

// In other words, write a function called coinCombos that takes in one argument: n, which represents the total amount of money (in cents) that you need to make change for. Your function should return the amount of possible combinations you can make to return that exact amount of change.

// For example:

// coinCombos(5); //returns 2
// coinCombos(10); //returns 4
// coinCombos(25); //returns 13
// coinCombos(60); //returns 73