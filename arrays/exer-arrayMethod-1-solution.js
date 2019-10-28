// Spread Operator
// 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.

const euroCountries = ['Spain', 'England', 'Germany'];
const asianCountries = ['China', 'Japan', 'Saudi'];

// console.log([...euroCountries, ...asianCountries]);
// console.log(euroCountries.concat(asianCountries));

const countries = [[...asianCountries, ...euroCountries] + ", Brazil," + "Peru,"]; //without [] it print a string
// console.log(countries);
const country = [...asianCountries, ...euroCountries] + ",Brazil," + "Peru,";
// console.log(country);


// Once again create two arrays. Add the items of one array to the beginning of the second array.
// Create another array. Include another array as one of the elements.


// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.

const Asia = asianCountries;
const Asian = [...asianCountries]; // both print the same
// console.log(Asia);
// console.log(Asian);


// 3. Find the Largest...
// Create a function to find the largest number in an array.

// 4. Find the Smallest
// Create a function to find the smallest number in an array.

const numbers = [2, 5, 6, 7,]
const maxNum = arr => Math.max(...arr);
const minNum = arr => Math.min(...arr);
//console.log([maxNum(numbers), minNum(numbers)]);


// 5. Clone and Merge
// Given two objects:

const person = { name: "Jonas" }
const job = { role: "Developer" }

// Clone the person object.

const clone = person;

//console.log(clone);

// Merge these two objects into one object: "employee". Use the spread operator to do so. 
//Then change the values of the properties in the employee object.

// const employee = [person, job];
// const employee = ...person, ...job;
// console.log(employee);


// 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.

// Examples

// isWhole(1, 2, 3, 4) ➞ false

// isWhole(9, 2, 2, 5) ➞ false

let marks = [1, 2, 3, 5]
const aver = (a, b, c, d) => Number.isIntiger((a + b + c + d) / 4);

// console.log(aver(...marks));



// Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

// 7. Minimum Removals for Even Output
// Create a function that takes 4 integers as an argument and returns the minimum number of removals to make the sum of all the elements even.

// Examples:
// minRemovals(1, 2, 3, 4) ➞ 0 removals
// minRemovals(5, 7, 9, 11) ➞ 0 removals
// minRemovals(5, 7, 9, 12) ➞ 1 removal


const removal = (a, b, c, d) => (a + b + c + d) % 2 === 0 ? "0 removals" : "1 removal";

//const removal2 = obj => obj.reduce((acc, num) => acc + num).map(x % 2 === 0) ? "0 removals" : "1 removal";
//var filtered = [3, 5, 67, 12, 34, 4, 9, 30].reduce((acc, num) => acc + num).filter(value => value % 2 !== 0) ? "0 removals" : "1 removal";
const removal3 = (...arr) => arr.reduce((acc, num) => ((acc + num) % 2 === 0 ? 0 : 1));
//const removal3 = (...arr) => arr.reduce((acc, num) => [acc + num]).filter(value => { value % 2 === 0 ? 1 : 0 });


console.log(removal(...marks));
//console.log(removal2(...marks));
console.log(removal3(...marks));


