let euro = ['Paris', 'London', 'Valletta', 'Prague', 'Rome'];


// // // join the hole array in a string, using or not a divised character (" x ")

// console.log(euro.join('/')); // "Paris/London/Valletta/Prague/Rome" this is a string


// // // --------------- DELETE AN ELEMENT

// // //first position

// console.log(euro.shift()) // return the element which has been deleted (the first element): Paris
// // console.log(euro); //as you can see the array is shorter, the first element has been deleted.

// // //last position

// console.log(euro.pop()) // same as shift what the last. return the last (already deleted): Rome
// // console.log(euro); // return the hole array without the last element

// console.log(delete euro[1]); // deleted creating an empty item in the defined position- return true
// console.log(euro);

// // ===================== ADD AN ELEMENT

// // first position

// console.log(euro.unshift("Madrid")) // return 4, number of element of the array, with the new element in firt position.
// //console.log(euro); // return the array with the new element in first position.

// // //last position

// console.log(euro.push('Buenos Aires')); // return 5, number of element of the array, with the new element in last position.
// //console.log(euro); // return the array with the new element in last position.
// console.log(euro[euro.length] = 'Chile'); // return the element which has been pushed as new FINAL element . 
// //console.log(euro);


// // // REPLACED AN ELEMENT

// console.log(euro[0] = "Mexico"); // return Mexico -Mexico instead of Madrid REPLACED FIRST FOR A NEW FIRST ELEMENT.
// console.log(euro);

// console.log(euro.splice(2, 2, "Tokio", "Rio")); //replace (x, (position), x (numbers of elements), new elements) return elements deleted.
// console.log(euro.splice(2, 2)) // can also been used without new elements
// console.log(euro);

// // // CONCAT

// // let amer = ['Lima', 'Bogota', 'Santiago'];
// // console.log(euro.concat(amer));
// // let afri = ['Gana', 'Tanzania', 'Marruecos']
// // console.log(euro.concat(amer, afri, ['China', 'Holanda'])); //with new items


// // // CREAT A NEW ARRAY FROM AN ARRAY

// console.log(tokio = euro.slice(1));  // slice out a piece of an array in a new array, but not delete nothing. 2 means the first item.
// console.log(firstSec = euro.slice(0, 3)); // the third items will not be included
// console.log(euro); // origin array not touchable
let str = euro.toString();
console.log(str);



// // // REVERSE

// console.log(euro.reverse());


// //The spread operator works on arrays and is used to spread out the elements of an array.

// //Adding elements of an array to another array.

const arr1 = [0, 1, 2, 3];
const arr2 = [4, 5, 6, 7];

arr3 = [8, 9, 10, ...arr1, ...arr2];
console.log(arr3);

// //Pass elements of an array as arguments to a function

const num = [1, 2, 3];

function addNumbers(x, y, z) {
    return x + y + z;
}

console.log(addNumbers(...num));

// //copy arrays. I will demonstrate both ways.

// // first way using slice()

const arr4 = [0, 1, 2, 3];
const arr5 = arr4.slice();
console.log(arr5);

// //second way using the spread operator

const arr6 = [...arr4];
console.log(arr6);

// //concatenate arrays. Again different ways of doing this
// //first way using concat

const arr7 = [0, 1, 2, 3];
const arr8 = [4, 5, 6];
const arr9 = arr7.concat(arr8);
console.log(arr9);

// //second way using the spread operator

const arr10 = [...arr7, ...arr8];
console.log(arr10);

// //Also using the spread operator it is easy to add in additional elements.

const arr11 = [...arr1, "an extra element", ...arr2];
console.log(arr11);


// ARRAY METHODS

const africanCities = ["Lagos", "Kinshasa", "Alexandria", "Mogadishu"];
const asianCities = ["Busan", "Taipei", "Kuala Lumpur", "Osaka"];
const myNums = [87, 15, 100, 2076, 999];
let a = 7;
// To check iF somethng is an array
console.log(Array.isArray(myNums));
console.log(Array.isArray(a));

// To add on to end - .push(value)

console.log(asianCities.push("Bangkok")); // console numbers of items

// To add on to front - unshift(value)
console.log(africanCities.unshift("Dar Es Salaam"));
console.log(africanCities);


// Take off from end - .pop()
// asianCities.pop();

// Take off from from front - shiift()
// africanCities.shift();

//Take off anywhere - splice()
asianCities.splice(1, 1, "Beijing");
console.log(asianCities);

// Concatenate Arrays
// const worldCities = asianCities.concat(africanCities);
// console.log(worldCities);

// with spread syntax // new in ES6
const worldCities = [...asianCities, ...africanCities];
console.log(worldCities);

// Sorting arrays
console.log(worldCities.sort());
console.log(myNums.sort()); // only sort it refering the last number.

// // Compare function (callback)

val = myNums.sort(function (x, y) {
    return x - y;
});
console.log(val);


// // To String
console.log(africanCities.toString());


let asianCities2 = asianCities.slice(1, 2); // from - to
console.log(asianCities2);


// unique items of an array,

const animals = ['bird', 'cat', 'snake', 'cat', 'dog', 'dog', 'dog', 'frog'];

const uniqueAnimalsArray = [...new Set(animals)]; //as an array
const uniqueAnimalsObject = new Set(animals); //as an object Set{}
console.log(uniqueAnimalsArray);
console.log(uniqueAnimalsObject);




















