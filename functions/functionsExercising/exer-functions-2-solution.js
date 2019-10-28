// Functions Exercises
// These exercises are aimed at making you more familiar with how to use functions.

//Print all of your results to the console.

// 1. XO /////////////////////

// Create a function that takes a string, checks if it has the same number of 'x's and
//'o's and returns either true or false.
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:

// XO("ooxx") ➞ true
// XO("xooxx") ➞ false
// XO("ooxXm") ➞ true (case insensitive)
// XO("zpzpzpp") ➞ true (returns true if no x and o)
// XO("zzoo") ➞ false

const check = str => str.toLowerCase().split("x").length === str.toLowerCase().split("o").length ? true : false;
//console.log(check("Oox"));

// split takes out the character or word you select, and then create an array with the rest pieces. So the length  of items should be the same
// if the number of character is the same!
// to see how split works, just display this example: 
//let x = "hola como estas?";
//console.log(x.split('a'));

// another way to write the function.

// const check = str => {

//     str.split("o").length === str.split("x").length ? true : false;
//     console.log(str.split("o"), str.split("x"));
// }




// 2. Pie /////////////////

// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// Example of defining the function: equalSlices(total slices, no. recipients, slices each)

// Examples:

// equalSlices(11, 5, 3) ➞ false

// // 5 people x 3 slices each = 15 slices > 11 slices

// equalSlices(8, 3, 2) ➞ true

// equalSlices(8, 3, 3) ➞ false

// equalSlices(24, 12, 2) ➞ true

const pie = (total, per, slice) => total >= per * slice ? true : false;

//console.log(pie(8, 3, 2));


// 3. Cubed
// Create a function that takes in an array of numbers and returns the sum of its cubes. Examples:

// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes([3, 4, 5]) ➞ 216
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 0
// Note If given an empty array, return 0.

const cube = nums => {

    let result = 0;

    for (let i = 0; i < nums.length; i++) {

        result += nums[i] ** 3;
        // result += Math.pow(nums[i], 3);
    }

    return result
}

//console.log(cube([1, 5, 9]));



// 4. Amplify the Multiples of 4 ///////////////

// Create a function that takes an integer and returns an array from 1 to the given number, where:
// If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
// Examples

// amplify(4) ➞ [1, 2, 3, 40]
// amplify(3) ➞ [1, 2, 3]
// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Notes The given integer will always be equal to or greater than 1. Include the number (the number in the parameters).


const counterDown = num => {

    let x = Math.abs(num);

    let nums = [];

    if (x > 0) {

        for (i = x; i > 0; i--) {

            if (i % 4 === 0) {
                nums.unshift(i * 10);

            } else {

                nums.unshift(i);
            }

        }

        return nums

    } else { return "0 is not a valid number. Please, try it again using a number bigger than 0" }
}

// console.log(counterDown(0));



// 5. Months
// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"

const month = num => {
    let months = ['Juanuay', 'February', 'March', 'Abril', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (num < 13) return months[num - 1];
    else return "It is an invalid month"
}

//console.log(month(13));


// 6. Even Number Generator ///////////////

// Create a function that finds all even numbers from 1 to the given number.

// Examples:

// evenNums(8) ➞ [2, 4, 6, 8]
// evenNums(4) ➞ [2, 4]
// evenNums(2) ➞ [2]
// If there are no even numbers, return an empty array.


const evenNums = num => {

    let x = Math.abs(num);
    let nums = [];

    if (x > 0) {

        for (let i = x; i > 0; i--) {

            if (i % 2 === 0) {

                nums.unshift(i);
            }
        }

        return nums

    } else { return "0 is not a valid number. Please try it again with another number." }

}

//console.log(evenNums(0));



// 7. Dictionary ////////////

// Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.

// Examples

// dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
// Notes

// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.


const matchLetters = (letters, arr) => {

    let y = letters.toLowerCase();
    let a = [];

    for (i = 0; i < arr.length; i++) {

        let x = arr[i].toLowerCase();

        //return x.match(y);

        if (x.match(y) !== null && x.match(y).index === 0) {

            a.push(arr[i]);
            //return x.match(y);
            console.log(arr[i]);
        }
    }

    return a
}

// console.log(matchLetters("tri", ["triplet", "tries", "trip", "piano", "tree"]));



// 8. is a four letter word. ///////
// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

// Examples:

// isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
// isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
// isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]

const isFourLetters = arr => {

    let words = [];

    for (i = 0; i < arr.length; i++) {

        if (arr[i].length === 4) {
            words.push(arr[i])
        }
    }

    return words
}

// console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));


// 9. Is it Symmetrical?
// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

// Examples:

// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true


const isSymmetrical = num => {

    let str = num.toString();

    for (let i = 0; i < str.length; i++) {

        if (str[i] !== str[str.length - i - 1]) {

            return false;
        }

    }

    return true;
}

//console.log(isSymmetrical(7227));


//another approach converting the number in a string and then split it in an array and comparing it (reverse)!

const isSy = num => {

    let str = num.toString().split("");
    //let str1 = str.split("");

    for (let i = 0; i < str.length; i++) {

        if (str[i] !== str.reverse()[i]) {

            return false;
        }

    }

    return true;


}

console.log(isSy(7347));










