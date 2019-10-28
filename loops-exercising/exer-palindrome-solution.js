
// Write a program to check whether a word is a palindrome or not.
// Note: a palindrome is a word, phrase, or sequence that reads the 
// same backwards as forwards, e.g. madam or tarrattarrat.

let word = "mkdsHKLSFnklam".toLowerCase();
let first = Math.floor((word.length) / 2);
let second = Math.ceil(word.length / 2);

let firstWord = word.substring(0, first);
let secondWord = word.substring(second, word.length)
let reverse = secondWord.split("").reverse().join("");


if (firstWord === reverse) {
    console.log(`${word} is a palindrome`);
} else {
    console.log(`${word} is not a palindrome`);
}


// Joseph approach 

let poly = "datdad".toUpperCase();
let bool;

for (let i = 0; i < poly.length; i++) {
    if (poly[i] !== poly[poly.length - i - 1]) {
        bool = false;
        break;
    } else {
        bool = true;
    }
}

console.log(bool);


// Benja approach

// const phrase = "Racecar";
// const halfLength = Math.floor(phrase.length / 2);
// for (let i = 0; i < halfLength; i++) {
//     const currentChar = phrase[i];
//     const endOffsetChar = phrase[phrase.length - 1 - i];
//     if (currentChar !== endOffsetChar) {
//         console.log(false);
//     } else {
//         console.log(true);
//     }
// }
