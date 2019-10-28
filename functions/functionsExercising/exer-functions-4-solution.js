//Question 1
// Write a function that performs the Caesar Cipher.
// The function caesarCipher should receive two arguments: a string and a number.
// The number specifies how many letters to shift the string by.

// caesarCipher("hello", 1) // returns "ifmmp"
// caesarCipher("dog", 3) // returns "grj"

// caesarChipher = (str, num) => {
//     let alpha = 'abcdefghijklmnopqrtuvwkyz'.split('')
//     let arrStr = str.split("")
//     let newArr = []

//     for (i in arrStr) {
//         debugger;
//         for (x in alpha) {
//             if (arrStr[i] === alpha[x]) { newArr.push(alpha[parseInt(x) + num]) }
//         }
//     }
//     return newArr.join('')
// }

// console.log(caesarChipher("dog", 3));

caesarChipher = (str, num) => {
    let alpha = 'abcdefghijklmnopqrtuvwkyz'.split('')
    let arrStr = str.split("")

    for (i in arrStr) {
        debugger;
        for (x in alpha) {
            if (arrStr[i] === alpha[x]) { arrStr[i] = alpha[parseInt(x) + num]; break; }
        }
    } return arrStr.join('')

}

//console.log(caesarChipher("dog", 3));



// Question 2
// Write a function digitalRoot that receives a number and sums each digit until the sum is less than 10.

// digitalRoot(121) // returns 4
// digitalRoot(746) // returns 17
// digitalRoot(6598) // returns 1

digitalRoot = arr =>
    arr.toString()
        .split("")
        .map(cur => parseInt(cur))
        .reduce((acc, cur) => acc < 10 ? acc + cur : acc)

//console.log(digitalRoot(6598));


// Question 3
// Write a function highThree that receives an array of positive 
// numbers and returns the product of the largest three numbers in the array.

// highThree([4, 1, 6, 2, 3, 5]) // returns 120
// highThree([11, 3, 20, 1]) // returns 660 

function highThree(arr) {
    arr.sort((a, b) => b - a);
    let mult = 1;
    for (let i = 0; i < 3; i += 1) {
        mult *= arr[i]
    }
    return mult
}

mult = arr => arr.sort((a, b) => b - a)
    .reduce((acc, cur) => {
        debugger;
        if (arr.indexOf(cur) < 3) {
            return acc * cur;
        }
        else { return acc }
    })

//console.log(mult([4, 1, 63, 20, 3, 5]));


// Question 4
// Write a function makeMonies that receives an array of stock prices 
//throughout the course of the day and returns the maximum profit that could have been made.

// The indices of the array correspond to different times of the day.
// Shorting is not an option. The index or time that you buy into the stock has to be smaller 
// or earlier than the index or time you sell the stock. What is the time complexity of your solution?

// makeMonies([20, 14, 10, 16, 22, 18]) // returns 12 b/c buy @ 10 & sell @ 22
// makeMonies([19, 24, 18, 12, 15, 30]) // returns 18 b/c buy @ 12 & sell @ 30

makeMonies = arr => `${Math.max(...arr) - Math.min(...arr)} b/c @ ${Math.min(...arr)} & sell @ ${Math.max(...arr)}`;
//console.log(makeMonies([20, 14, 10, 16, 22, 18]));



// Question 5
// Given an array of integers, find the largest sum of a contiguous subarray.

// largestSum([6, 4, -8, 7]) // returns 10 b/c the [6, 4] summed is the largest
// largestSum([6, 4, -8, 7, 5]) // returns 14 b/c adding all the elements produces the largest sum

largestSum = arr => {

    let sumAll = arr.reduce((acc, cur) => acc + cur);
    //let result;

    for (i = 0; i < arr.length - 1; i += 1) {

        arr[i] += arr[i + 1];

    }
    arr.pop()
    console.log(arr);
    let maximal = Math.max(...arr)

    if (maximal > sumAll) { return maximal } else if (sumAll > maximal) { return sumAll } else { return "They are equal." }
}

console.log(largestSum([6, 4, -8, 7]));



// Question 6
// Implement the Folding Cipher. It folds the alphabet in half and uses the adjacent letter.
// Ie. a <=> z, b <=> y, c <=> x, m <=> n.
// foldCipher("abc") // returns "zyx" 



foldCipher = (str) => {
    let alpha = 'abcdefghijklmnopqrtuvwkyz'.split('')
    let arrStr = str.split("")

    for (i in arrStr) {
        debugger;
        arrStr[i] = alpha[alpha.length - 1 - parseInt(i)];

    } return arrStr.join('')

}

//console.log(foldCipher("abc"));


