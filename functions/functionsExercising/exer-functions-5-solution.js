//Question 1
// Given a string and the position of an open parentheses bracket, return the position of the matching closing parentheses bracket.

// findClose("He(ll(o) Wor)ld", 2) // returns 12
// findClose("(()())", 1) // returns 2

findClose = (str, num) => {

    const arr = str.split("");
    let arrNum = [];
    // console.log(arr);
    // console.log(arrNum);
    arr.reduce((cur, idx) => {
        if (cur === ")") {
            arrNum.push(idx)
        }
    })
    // debugger;
    // for (let i = 0; i < arr.length; i += 1) {
    //     if (arr[i] === ")") { arrNum.push(i) }
    // }
    return arrNum[num - 1]
}

//console.log(findClose("He(ll(o) Wor)ld", 2));

// Question 2
// Write a function that receives a string and outputs whether the string is a valid IPv4 address.
// Anything between 0.0.0.0 and 255.255.255.255 would return true. Bonus: What is an IPv4 address?

// isIPValid("195.2.43.5") // returns true
// isIPValid("0.4.521.3") // returns false


isIPValid = str => {
    const arr = str.split(".")
        .map(cur => parseInt(cur))

    return arr.every(cur => cur <= 255)
}
//console.log(isIPValid("195.2.43.500"));


// Question 3
// Write a function that receives a year as an argument and returns an array with 
//the 10 closest subsequent years that meet the following condition: 
//the first two digits summed with the last two digits are equal to the middle two digits.

// Year is a four digit integer Examples: 1978 => 19 + 78 = 97 2307 => 23 + 07 = 30

years = (year, numYears) => {
    let arr = []
    for (year; arr.length < numYears; year += 1) {
        let yearArr = year.toString().split("")//.map(cur => parseInt(cur))
        let first = yearArr[0] + yearArr[1];
        let middle = yearArr[1] + yearArr[2];
        let last = yearArr[2] + yearArr[3];
        let sum = parseInt(first) + parseInt(last)
        if (sum === parseInt(middle)) {
            arr.push(year)
        }
    }
    return arr

}

//console.log(years(1978, 10));


// Question 4
// There are 100 open lockers. You close every 2nd locker (so the 2nd, 4th, 6th, ... 100th are all closed).
// Then, you go to every third locker and open it if it is closed and close it if it is open.
// You proceed to toggle every nth locker on pass number n. 
//So, for example, on pass number 16 – you will toggle every 16th locker. 
// After your hundredth pass of the hallway, in which you toggle only locker number 100, what lockers are open?

let arr = [];
for (let i = 0; i < 100; i += 1) {
    arr.push("o")
}
//console.log(arr);

loops = (arr, num = 2) => {

    debugger;
    if (num === arr.length) { return arr }
    else {
        for (i = num - 1; i < arr.length; i += num) {
            arr[i] === "o" ? arr[i] = "x" : arr[i] = "o";

        } return loops(arr, num + 1)
    }
}

//console.log(loops(arr));


// Question 5
// Let's write a function that will receive a string as parameter.
// It should return a compressed version of the string, but only if the compressed string 
//is shorter than the original.

// For example, for the string 'aabccccccaaa' it should return 'a2b1c5a3'.
// For the string 'abc' it should still return 'abc' as it is shorter than the compressed version 'a1b1c1'.

shorterStr = (str, i = 0) => {

    let arr = str.split("");
    let newArr = [];

    debugger;

    for (i; i < arr.length; i += 1) {
        let counter = 0;

        if (arr[i] === arr[i + 1]) {

            for (x = i; x < arr.length; x += 1) {

                if (arr[x] === arr[x + 1]) {
                    counter += 1;
                }
                else if (arr[x] !== arr[x + 1]) {

                    newArr.push(arr[x] + (counter + 1));
                    i = x

                }
            }

        } else { newArr.push(arr[i] + 1) }

    } return newArr.toString().replace(/,/g, "")

}

//console.log(shorterStr("aaahhabtbfcc"));


// arr.reduce((acc, cur, idx) =>
//     acc + cur[idx + 1])
//     if (cur === cur[idx + 1]) { return acc += 1 }
// })


// Question 6
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()" Output: true

// Example 2:

// Input: "()[]{}" Output: true

// Example 3:

// Input: "(]" Output: false

// Example 4:

// Input: "([)]" Output: false

// Example 5:

// Input: "{((())){({{{}}}})}[]}" Output: true


// checkStr = (str, i = 0) => {

//     const arr = str.split("");
//     let newArr = [];

//     arr.forEach(cur => {

//         if (cur === "(" || cur === ")" || cur === "{" || cur === "}" || cur === "[" || cur === "]") {
//             newArr.push(cur)
//         }
//     })

//     if (newArr.length % 2 === 0) {

//         if (newArr[0] === "(" || newArr[0] === "{" || newArr[0] === "[") {

//             for (i; i < newArr.length; i += 1) {


//                 if (arr[i] === "(" && arr[i + 1] === ")" || arr[i + 1] === "[" || arr[i + 1] === "{") { }
//                 else if (arr[i] === "{" && arr[i + 1] === "}" || arr[i + 1] === "[" || arr[i + 1] === "(") { }
//                 else if (arr[i] === "[" && arr[i + 1] === "]" || arr[i + 1] === "{" || arr[i + 1] === "(") { }
//                 else { return false }

//                 //             for (x = i; x < arr.length; x += 1) {

//                 //                 if (arr[x] === arr[x + 1]) {
//                 //                     counter += 1;
//                 //                 }
//                 //                 else if (arr[x] !== arr[x + 1]) {

//                 //                     newArr.push(arr[x] + (counter + 1));
//                 //                     i = x
//                 //                     break;
//                 //                 }
//                 //             }

//                 //         } else { newArr.push(arr[i] + 1) }
//                 //     }

//             } else { return false }

//         }

//         else { return false }
//     }


//     console.log(checkStr("()%ˆ&HGHNFH{}J"));

const validStr = str => {

    debugger;

    if (str.length === 0) {
        return true;
    }

    let match;
    let current;
    let arr = []
    let open = ['[', '{', '(']
    let close = [']', '}', ')']

    for (let i = 0; i < str.length; i++) {

        current = str[i]; // The current bracket inside the loop

        if (close.indexOf(current) != -1) { // -1 is the result when something does not match indexOf

            match = open[close.indexOf(current)] // match returns a number which matches the same index number in both the open and clode array

            console.log(match);

            if (arr.length == 0 || (arr.pop() != match)) { // if the array length is zero the the program goes to the next comparison,
                // but even tho we only use the pop() method in a comparison, it does pop the array.
                return false
            }
            //console.log(i + " : " + arr) / / Move this log statement up or above this if statement
        } else {
            arr.push(current) // push the current caracter if it does not include inside the close array
        }
    }
    return (arr.length == 0) // if all the open brackets in the array have been matched in order (because of pop()) the array is than empty === True   Else === False
}
console.log(validStr("([])"));


let close = [']', '}',]

console.log(close.pop());


console.log(close.indexOf("]"));