// Objects

// Please print your answers to the console.
// 1. Check if a number is within a given range
// Write a program that checks if a number is within the range of an object's min and max properties.

// Examples:

// 4, { min: 0, max: 5 }) ➞ true

// 4, { min: 4, max: 5 }) ➞ true

// 4, { min: 6, max: 10 }) ➞ false

// 5, { min: 5, max: 5 }) ➞ true

// Notes: Assume min <= max is always true.

const minMax = {
    min: 0,
    max: 5
}

const { min, max } = minMax;

const checkNum = num => {
    for (let i = min; i <= max; i++) {
        if (i === num) { return true }
    }
    { return false }
}

const inBetween = (num, obj) => num >= obj.min && num <= obj.max; // you dont have to return true or false
//console.log(inBetween(4, minMax));
//console.log(checkNum(3));


// 2. Return Keys and Values
// Write a program that takes an object and returns the keys and values in separate arrays.

// Examples:
// { a: 1, b: 2, c: 3 } ➞ ["a", "b", "c"], [1, 2, 3]
// {key: true} ➞ ["key"], [true]

const getKeysValues = arr => [Object.keys(arr), Object.values(arr)]

//console.log(getKeysValues(minMax));


// 3. Scrabble
// Write a program that, given an array of scrabble tiles,
// counts the maximum score that a player can earn from the tiles in their hand.
// Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 },
// { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

const player = [
    { tile: "N", score: 1 }
    , { tile: "K", score: 5 }, { tile: "Z", score: 10 },
    { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 }]

// const maxScore = obj => {

//     let result = [];
//     let score;

//     for (let i in obj) {

//         result.push(obj[i].score);
//     }

//     console.log(result)

//     for (let i = 0; i < result.length; i++) {

//         score = score + result[i]
//     }
//     return score

//     //return result

// }

// console.log(maxScore(player));

const maximumScore = obj => obj.reduce((acc, val) => acc + val.score, 0);
//console.log(maximumScore(player));

let scoreMax = 0;
for (let i of player) {
    scoreMax += i.score;
}
console.log(scoreMax);



// 4. Is it an empty object?
// Write a program that returns true if an object is empty, and false if otherwise.

// Examples:

// {} ➞ true
// {a: 1} ➞ false

const empty = obj => Object.keys(obj).length === 0

const emptyObj = {};

console.log(empty(minMax));
