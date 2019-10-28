// Q1. forEach-log
// Write a function that uses the forEach array method to log out every member of an array to the console. The function should only take in one argument, the array. The function should NOT use a traditional for loop.

//const arr = [3, 4, 5, 6].forEach(arr => console.log(arr));


// Q2. simple-filter
// Write a function called greaterThan10 that uses the filter to filter an array and only return numbers that are greater than 10. The function should take in an array of numbers as an argument.

// Examples:

const greaterThan10 = [1, 2, 3, 11, 12, 13].filter(value => value > 10); //returns [11,12,13]
//console.log(greaterThan10);

//greaterThan10([11, 2, 3, 1, 22, 4, 33]); //returns [11,22,33]

// Q3. simple-filter-2
// Write a function called filterEvens that uses the filter method to filter an array and only return the even numbers. The function should take in an array of numbers as an argument, and should not use a loop.

// Examples:

const filterEvens = [1, 2, 3, 11, 12, 13].filter(value => value % 2 === 0); //returns [2,12]
//console.log(filterEvens);

// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]


// Q4. forEach-sum
// Write a function called forEachSum that takes in an array of numbers as an argument and returns a sum of the array.
// The function should use the forEach array method and should NOT use for loop or while loop.

let sum = 0;
const forEachSum = [22, 2, 31, 110, 6, 13].forEach(value => { sum += value; return sum })
const reduceM = [22, 2, 31, 110, 6, 13].reduce((acc, value) => acc + value);

// console.log(reduceM);
// console.log(sum);

// Q5. implement-forEach
// Write a function called forEach that takes in two arguments: an array and a function. 
//forEach should apply the passed in function to every member of the array. It should not return anything.

// Example:

// forEach(arr, log); // logs 1, 2, 3, 4, 5

// var arr = [1, 2, 3, 4, 5];
// function log(val) {
//     console.log(val);
// }

// double = num => num * 2;
// doubleArr = arr => arr.map(double);
// let arr = [1, 2, 3, 4, 5];
// console.log(doubleArr(arr));

// var numbers = [19, 45, 32];
// sum10 = val => val.map(x => x + 10);
// const forEach = (arr, funct) => funct(arr);
// console.log(forEach(numbers, sum10));

let arrNums = [];
let num = 2;
sum10 = val => val + 10;
var numbers = [19, 45, 32].map(val => val + 10);
var number = [19, 45, 32].forEach(val => arrNums.push(val + 10));
//console.log(sum10(num));
//console.log(numbers);
//console.log(arrNums);



// sum10arr = arr => arr.forEach(val => val + 10);
// console.log(sum10arr(numbers));

//NO WORKING


// Q6. map-triple-array
// Write a function that uses the map array method to triple every member of an array. The function should only take in one argument, the array. The function should NOT use a loop.

// var numbers = [19, 45, 32].map(x => x * 3);
// console.log(numbers);

// Q7. map-strings-to-nums
// Write a function called stringsToNums that takes an array of strings, converts them to numbers,
// and returns a new array containing those numbers. Use the map array method, do not use any traditional loops.

// Examples:

//const stringToNums = ["4", "3", "9"].map(val => Number(val)); //returns [4,3,9]
//console.log(stringToNums);

stringsToNums = arr => arr.map(num => parseInt(num));

//console.log(stringsToNums(["1", "22", "7"])); //returns [1,22,7]

// Q8. first-letter-uppercase-map
// Write a function that accepts a string as a parameter and converts the first letter
// of each word of the string in upper case. However, do not use a for loop, while loop, or forEach.


let upperCaseStr = [];
let stringOne = 'the quick brown fox';
// const capitalize = str => [...str].forEach(val => upperCaseStr.push(val[0].toUpperCase() + val.substring(1, val.length)));
// capitalize(stringOne);

const capitalize = str => str.split(' ').map(val => val[0].toUpperCase() + val.slice(1)).join(' ');
const example = capitalize(stringOne);
console.log(example);


// Expected Output : 'The Quick Brown Fox '

// Q9. implement-map
// Write a function called map that takes in two arguments: an array and a function. 
// map should apply the passed in function to every memeber of the array, and return a new array with the results.

// Example:
// map(arr, double); // returns [ 2, 4, 6, 8, 10 ]

// double = num => num * 2;
// let arr = [1, 2, 3, 4, 5].map(double);
// console.log(arr);

double = num => num * 2;
doubleArr = arr => arr.map(double);
let arr = [1, 2, 3, 4, 5];
// console.log(doubleArr(arr));


// Q10. reduce-sum
// Write a function called sum that uses the reduce to sum up an array of numbers. Do NOT use a typical loop; just use the reduce method.

// Examples:

// sum([1,2,3,4,5]); //returns 15

// const sum3 = [6, 7, 7].reduce((acc, val) => acc + val) //returns 20
// console.log(sum3);


// Q11. reduce-min
// Write a function called reduceMin that uses the reduce to return the minimum number in an array of numbers. 
//Do NOT use a typical loop; just use the reduce method.

// Examples:

let numbersones = [2, 3, -4, 5, 1].reduce((a, b) => a < b ? a : b)
//console.log(numbersones);


//const reduceMin = Math.min(2, 3, -4, 5, 1)//.filter(val => Math.min(val))//.reduce((acc, val) => acc + val); //returns 1

//another way

let arr7 = [2, 3, -4, 5, 1];
reduceMin = arr => Math.min(...arr);
//console.log(reduceMin(arr7));

// reduceMin([6, 7, 7, 4]); //returns 4
// reduceMin([10, 0, 100, 1, -100, 20, 33]); //returns -100



// Q12. count-odds-and-evens
// Write a function named countOddsAndEvens that takes in an array of numbers. 
//Then function should return an object that has two properties: odds and evens, 
//that contain the number of odd numbers in the array, and the number of the even numbers in the array, 
//respectively. Do not use a for loop, while loop, or forEach.

// Examples:

// countOddsAndEvens([11, 2, 36, 4, 15]);  // returns {odds: 2, evens: 3}

let nums = [1, 2, 3, 4, 5, 5, 99, 101];  // returns {odds: 6, evens: 2}
let object = { evens: 0, odds: 0 };
countOddAndEvents = arr => arr.map(x => x % 2 === 0 ? object.evens += 1 : object.odds += 1);
countOddAndEvents(nums);
//console.log(object);

x

