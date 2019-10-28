// JS-functions-roundup
// Solve all of these problems without using a for loop or while loops in any of your solutions. 
//You should also avoid creating any unnecessary side effects:

// 1.
// write a function (or series of functions) that takes in an array that contains numbers, and returns the sum of all the even numbers

// Examples:
// Input: [2, 5, 7, 8, 10]
// Output: 20
// Input: [9, 11, 13, 15, 17, 2, 4]
// Output: 6

//const numbers = [2, 5, 7, 8, 10];
const sumEven = arr =>
    arr.filter(cur => cur % 2 === 0)
        .reduce((acc, cur) => acc + cur);
//console.log(sumEven(numbers));

// 2.
// write a function (or series of functions) that takes in an array that contains strings, 
//and returns an array with the number of letters in each string

// Examples:
// Input: ['hey', 'hi', 'hello']
// Output: [3, 2, 5]
// Input: ['this', 'is', 'a', 'longer', 'array']
// Output: [4, 2, 1, 6, 5]
//const arrStr = ['hey', 'hi', 'hello'];

const numbOfLet = arr => arr.map(cur => cur.length);
//console.log(numbOfLet(arrStr));

// 3.
// write a function (or series of functions) that takes in an array that can contain both words and numbers,
// and returns the sum of all the even numbers

// Examples:
// Input: [2, 'hey', 5, 'hi, 6]
// Output: 8
// Input: [9, 'cya', 5, 'goodbye', 'later, 10, 20]
// Output: 30

const arr = [9, 'cya', 5, 'goodbye', 'later', 10, 20];
const sumEvenNum = arr =>
    arr.filter(cur => typeof (cur) === "number" && cur % 2 === 0)
        .reduce((acc, cur) => acc + cur);

// console.log(sumEvenNum(arr));

const addstrAndNum = arr => {
    let numbers = arr.filter(x => (parseInt(x) == x) && x % 2 === 0);
    let str = arr.filter(x => !(parseInt(x) == x) && x % 2 === 0)
        .map(x => x = x.length);

    numbers = numbers.length > 0 ? numbers.reduce((acc, val) => acc + val) : 0;
    str = str.length > 0 ? str.reduce((acc, val) => acc + val) : 0;

    return numbers + str;
}

// console.log(addstrAndNum([2, 'hey', 5, 'hi', 6, 2]));

// 4.
// write a function (or series of functions) that takes in an array that an contain strings or numbers,
// and returns the sums of the length of all of the words (in other words, returns the sum of the total number 
//of letters in all of the words combined)

// Examples:
// Input: ['hey', 2, 'hi', 4, 'hello']
// Output: 10
// Input: ['this', 5, 'is', 7, 'a', 'longer', 10, 'array']
// Output: 18

//const arr1 = ['this', 5, 'is', 7, 'a', 'longer', 10, 'array'];
const arr1 = [2, 4, 5]
const sumWord = arr => {
    let words = arr.filter(cur => typeof (cur) === "string")
        .map(cur => cur.length)
    words = words.length > 0 ? words.reduce((acc, cur) => acc + cur) : 0;
    return words
};
//console.log(sumWord(arr1));

// 5.
// write a function (or series of functions) that takes in an array of strings, 
//and returns an object with the vowel count of all of the strings combined

// Examples:

// Input: ['hey', 'hi', 'hello']
// Output: {'a': 0, 'e': 2, 'i': 1, 'o': 1, 'u': 0}
// Input: ['this', 'is', 'a', 'longer', 'array']
// Output: {'a': 3, 'e': 1, 'i': 2, 'o': 1, 'u': 0}

let counterVowels = { a: 0, e: 0, i: 0, o: 0, u: 0, }

const arrStr = ['hay', 'hi', 'hello'];

const arrLetter = obj => [...obj.join("")]
const counterNumOfVowel = obj => obj.map(x => {
    if (x === "a") { counterVowels.a += 1 }
    else if (x === "e") { counterVowels.e += 1 }
    else if (x === "i") { counterVowels.i += 1 }
    else if (x === "o") { counterVowels.o += 1 }
    else if (x === "u") { counterVowels.u += 1 }
})
counterNumOfVowel(arrLetter(arrStr))
//console.log(counterVowels);

const vowelCount = arr => {
    let vowels = arr.join("").split("").filter(x => x.match(/[aeiou]/gi));
    let obj = { a: 0, e: 0, i: 0, o: 0, u: 0 }
    vowels.forEach(x => obj[x] = (obj[x] || 0) + 1);
    return obj;

}

//console.log(vowelCount(['this', 'is', 'a', 'longer', 'array']));


// 6.
// write a function (or series of functions) that takes in an array of numbers,
// and returns an object with a count of the number of even numbers and number of odd numbers in the array

// Examples:
// Input: [1, 2, 3, 4, 5]
// Output: {'evens': 2, 'odds': 3}
// Input: [10, 10, 10, 5, 5, 5, 5]
// Output: {'evens': 3, 'odds': 4}

let evenOdd = { even: 0, odd: 0 }
//const arrNumbers = [2, 5, 7, 8, 8, 10];

const evensAndOdds = arr => {
    return {
        evens: arr.filter(x => x % 2 === 0).length, //accumulate in an array and push the length in an element of an object 
        odds: arr.filter(x => x % 2 !== 0).length
    }
}
//console.log(evensAndOdds([10, 10, 10, 5, 5, 5, 5]));

// using map function

// const counterEvenOdd = obj => obj.map(x => {
//     if (x % 2 === 0) { evenOdd.even += 1 } else { evenOdd.odd += 1 }
// })

//using forEach function
const counterEvenOdd = obj => obj.forEach(x => {
    if (x % 2 === 0) { evenOdd.even += 1 } else { evenOdd.odd += 1 }
})
//counterEvenOdd(arrNumbers)
//console.log(evenOdd);

// 7.
// write a function (or series of functions) that takes in an array of numbers, and returns an array of only the unique numbers

// Examples:
// Input: [1, 1, 2, 3, 4, 5, 6, 3]
// Output: [2, 4, 5, 6]
// Input: [3, 3, 3, 4, 4, 4, 5, 6, 7, 7, 7]
// Output: [5, 6]

const arrNumbers = [2, 5, 7, 8, 7, 8, 10];
const uniqueNum = arr => {
    let obj = {} //create an object to counter items of an array.
    arr.forEach(x => {
        obj[x] = (obj[x] || 0) + 1; // if the item repeat itself the element of the object willc count it
    }); // '2': 1, '5':1, '7':2,...

    return Object.keys(obj).filter(x => obj[x] === 1)
        .map(x => x = parseInt(x)) // return only keys, not the values, filter values === 1
    // (not been repeated < 1), and return not strings '4', but a number (parseInt())

};

//console.log(uniqueNum(arrNumbers));

// 8.
// write a function (or series of functions) that takes in a string of words, 
//capitalizes the last letter of every word, removes any word that has an even amount of letters, and returns a string.

// Examples:

// Input: 'hey how do you feel today'
// Output: 'heY hoW yoU todaY'

const str = 'hey how do you feel today';

const strInArr = str => str.split(" ");
const filterEvenWords = arr => arr.filter(cur => cur.length % 2 !== 0);
const capLastLet = arr => arr.map(i => i.substring(0, i.length - 1) + i[i.length - 1].toUpperCase());
const turnToStr = arr => arr.join(" ")

console.log(turnToStr(capLastLet(filterEvenWords(strInArr(str)))));


// 9.
// write a function (or series of functions) that takes in an array of numbers, squares every number, 
//removes all numbers that's square is even, converts every number to a string, and returns an array.

// Examples:

// Input: [1, 2, 3, 4, 5]
// Output: ['9', '25']
// Input: [10 ,11]
// Output: ['121']

//const arrNumbers = [1, 2, 3, 4, 5];
const squEvenSelec = arr => arr.filter(cur => Math.pow(cur, 2) % 2 !== 0);
const squ = arr => arr.map(cur => Math.pow(cur, 2));
const numToStr = arr => arr.map(cur => cur.toString());

//console.log(numToStr(squ(squEvenSelec(arrNumbers))));

// 10.
// write a function (or series of functions) that takes in an array of strings, 
//reverses every string, removes all strings with the letter 'l' in them, 
//capitalizes the first letter of strings with an even amount of letters,
// and capitalizes the last letter of strings with an odd amount of letters.

// Examples:

// Input: ['bird', 'cat', 'snake', 'cat', 'dog', 'frog', 'llama']
// Output: ['Drib', 'taC', 'ekanS', 'taC', 'goD', 'Gorf']

//const arrStr = ['bird', 'cat', 'snake', 'cat', 'dog', 'frog', 'llama'];
const reverStrFromArr = arr =>
    arr.map(cur => cur.split("")
        .reverse()
        .join(""));

const wordWithoutL = arr => arr.filter(cur => cur.indexOf("l") === -1);

const capitalizingEvenOdd = arr =>
    arr.map(cur => cur.length % 2 === 0 ?
        cur.substring(0, cur.length - 1) + cur[cur.length - 1].toUpperCase() :
        cur[0].toUpperCase() + cur.substring(0, 1));

// you can usu a recusion here , check it out !!!

//console.log(capitalizingEvenOdd(wordWithoutL(reverStrFromArr(arrStr))));


// 11.
// write a function (or series of functions) that takes in an array of strings,
// removes duplicate strings, 
// removes all of the strings with an even number of letters,
// and multiplies the remaining letter counts together to return a product.

// Examples:

// Input: ['bird', 'cat', 'snake', 'cat', 'dog', 'frog']
// Output: 45

// Input: ['this', 'is', 'a', 'test', 'test']
// Output: 1

const animals = ['bird', 'cat', 'snake', 'cat', 'dog', 'frog'];

const outOfNames = arr =>
    [...new Set(arr)]
        .filter(cur => cur.length % 2 !== 0)
        .map(cur => cur.length)
        .reduce((acc, cur) => acc * cur);


// console.log(outOfNames(animals));
