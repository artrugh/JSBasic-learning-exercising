// FOR EACH

// THE FOREACH METHOD EXECUTES A  PROVIDED FUNCTION ONCE FOR EACH ARRAY ELEMENT.

// function output = (item, index, array); This function returns the item, index and an array if needed.

const arr = [1, 2, 3, 4, 5];

//arr.forEach(number => console.log(number * 2));

let a = arr.forEach(number => number * 2);
//console.log(a);


let b = [2, 4, 7, 8].forEach((number, id, arr2) => `${id}: ${number} - ${arr2}`);
console.log(b);


// const stuff = ["my stuff", "random stuff", "whatever", "their stuff"];

// stuff.forEach((list, id) => console.log(`${id} - ${list}`));

// const cities = [
//   "Lima",
//   "Montevideo",
//   "Rio de Janeiro",
//   "Sao Paulo",
//   "Santiago"
// ];
// cities.forEach((city, index) => {
//   if (city === "Sao Paulo") {
//     city = city.toUpperCase();
//   } else {
//     city = city.toLowerCase();
//   }
//   console.log(city);
// });

//return skips over. It does not break out of the loop
// cities.forEach((city, index) => {
//   if (city === "Montevideo") {
//     return;
//   }
//   console.log(city);
// });

//MAP
// The map() method creates a new array with the results of calling a provided function on every
// element in the calling array.

// The callback runs for each value in the calling array and returns each new value in the
// resulting array.
// Keep in mind that the resulting array will always be the same length as the calling array.

//const array = [2, 3, 10, 20];
// const map1 = array.map(x => x * 2);
// console.log(map1);

// let newArr = array.map((val, index, array) => {
//   return {
//     index: index,
//     value: val,
//     array: array
//   };
// });

// console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = arr.map((val, index) => {
//   if (val % 2 === 0) {
//     return val * 5;
//   } else {
//     return val;
//   }
// });

// console.log(newArr);

// FILTER
// The filter() methods creates a new array with all the elements that pass the test
// implemented by the provided function.

// const words = ["polar", "iceberg", "snow", "skiing", "frozen", "penguin"];
// const result = words.filter(word => word.length > 5);

// console.log(result);

// const nums = [2, 8, 12, 563, 1007, 27896];
// const evens = nums.filter(num => num % 2 === 0);
// console.log(evens);

// let data = [
//   {
//     country: "China",
//     population: 1409517397
//   },
//   {
//     country: "India",
//     population: 1339180127
//   },
//   {
//     country: "USA",
//     population: 324459463
//   },
//   {
//     country: "Indonesia",
//     population: 263991379
//   }
// ];

// let countries = data.filter(val => {
//   return val.population > 500000000;
// });

// console.log(countries);

// REDUCE
// The reduce() method executes a reduce function (that we provide) on each
// element in the array. Resulting in a single value.

// let result = array.reduce(callback)
// OPTIONALLY! we can specify an initial value

//SUMS ALL VALUES IN AN ARRAY. WORKS GREAT WITH SIMPLE NUMERIC ARRAYS.
// const array1 = [1, 2, 3, 4];
// const reducer = array1.reduce((total, num) => total + num);
// console.log(reducer);

//IF WE WERE TO SUM UP THE VALUES WITHIN OBJECTS, THIS IS HOW WE WOULD DO THIS....
//An initial value of 0 has to included. Else it don't work 

// const array1 = [{
//     num: 1
// }, {
//     num: 2
// }, {
//     num: 3
// }, {
//     num: 4
// }];

// const reducer = array1.reduce((total, num) => total + num.num, 0);
// console.log(reducer);


// const numbers = [65, 44, 22, 8];
// let solution = numbers.reduce((acc, val) => acc - val);
// console.log(solution);

//SPECIFY AN INITIAL VALUE
// let sum = numbers.reduce((acc, val) => acc + val, 100);

// console.log(sum);

// const names = [
//     "Kim",
//     "Bob",
//     "Tupac",
//     "Kim",
//     "Ed",
//     "Bob",
//     "Tupac",
//     "Ed",
//     "Fred",
//     "Sal",
//     "Bob"
// ];
// const countInstances = names.reduce((allNames, name) => {
//     if (name in allNames) {
//         allNames[name]++;
//     } else {
//         allNames[name] = 1;
//     }
//     return allNames;
// }, {}); //Value starts off as an empty object

// console.log(countInstances);
//Collapse



