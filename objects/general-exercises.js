// Strings ////////////


// Write a program to check whether JavaScript is a string or not.

const js = "JavaScript";
// console.log(typeof js === "string");

// Write a program to check whether a string is empty or not.

const emptyStr = str => str === "" ? "This is an empty string" : str;
//console.log(emptyStr("a"));


// Write a program to convert a string in abbreviated form. E.g. John Smith -> John S.

// const abbForm = names => {
//     let arr = names.split(" ");
//     let firstName = arr[0];
//     let lastName = arr[1];
//     return `${firstName} ${lastName[0]}.`
// }

const abbForm = names => {
    let arr = names.split(" ");
    return `${arr[0]} ${arr[1].substring(0, 1)}.`
}

//console.log(abbForm("John Smith"));


// Write a program to hide email addresses to protect from unauthorized user. E.g. "john_smith@example.com" -> "john...@example.com"

const hiddenEmail = eMail => {
    let arr = eMail.split("@");
    return `${arr[0].substring(0, 4)}...@${arr[1]}`
}

//console.log(hiddenEmail("john_smith@example.com"));

// Write a program to change a string to the following format: E.g. John Smith from Berlin -> john-smith-from-berlin.

const formatStr = str => str.toLowerCase().replace(/ /gi, "-").concat(".");

//console.log(formatStr("John Smith from Berlin"));

// Write a program to convert a string into camel case. E.g. "john smith" -> "johnSmith"

const camelCase = str => {

    let arr = str.split(" ");
    let arr1 = [];
    for (i = 0; i < arr.length; i++) {
        let a = arr[i];
        let b = a.replace(a[0], a[0].toUpperCase())
        arr1.push(b);
    }
    let finalStr = arr1.toString();

    return finalStr.replace(/,/gi, "")
}

//console.log(camelCase("john smith and the house"));


// Write a program that returns ordinal numbers (1st, 2nd, 3rd, 4th, 5th etc.)

const ordinalNum = num => {
    if (num === 1) { return num + "st" }
    else if (num === 2) { return num + "nd" }
    else if (num === 3) { return num + "rd" }
    else { return num + "th" }
}

const ordinal = num => {
    tens = num % 10 === 1;
}

// console.log(ordinalNum(1));


// Declare a variable and sort the characters into alphabetical order.


const sortStr = str => {

    return str.split("").sort().join("")
}



//console.log(sortStr("hshkfh;bdfh"));



// Write a program that takes a number (1-60) and returns a corresponding string of hyphens. Examples: (1) ➞ "-" (5) ➞ "-----" (3) ➞ "---"

const hyphens = x => {
    num = Math.abs(x);
    let hyp = [];

    if (num <= 60) {
        for (i = num; i > 0; i--) {

            hyp += "-";
        }

        return hyp

    } else { return "Invalid number. The number should be smaller than 61" }
}

// console.log(hyphens(-8));


// Arrays //////////


// Leap Years Write a program which finds the leap years in a given range of years.

// const leapYear = year => {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) { return `${year} is a leap year` } else { return `${year} is not a leap year` }
//         } else { return `${year} is a leap year` }
//     } else { return `${year} is not a leap year` }
// }

// shorter path 

const leapYear = year => {
    if (year % 4 === 0 && (year % 100 != 0) || year % 400 === 0) {
        return `${year} is a leap year`
    } else { return `${year} is not a leap year` }
}

// console.log(leapYear(1990));

// If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days).


// First & Last Write a program that takes an array and returns the first and last elements as a new array.
// Expected Output: [5, 10, 15, 20, 25] ➞ [5, 25] ["javascript", 13, null, false, true] ➞ ["javascript", true] [undefined, 4, "6", "hello", null] ➞ [undefined, null]

const arrLast = arr => {
    return [arr[0], arr[arr.length - 1]]
}

// console.log(arrLast([4, 5, "hola", 7, 'pepe']));



// Find the Smallest Number Write a program that takes an array of numbers and returns the smallest number in the set.
// E.g [34, 15, 88, 2] ➞ 2 [34, -345, -1, 100] ➞ -345 [-76, 1.345, 1, 0] ➞ -76 [0.4356, 0.8795, 0.5435, -0.9999] ➞ -0.9999 [7, 7, 7] ➞ 7

const minNum = num => Math.min(...num);
// console.log(minNum([34, 15, -88, 2]));

const numbers = [34, -345, -1, 100];
// console.log(Math.min.apply(Math, numbers));


// Spell it out Write a program which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
// E.g. spelling("bee") ➞ ["b", "be", "bee"] spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"] spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager"]

const spell = word => {

    let arr = [""];
    for (i = 0; i < word.length; i++) {
        arr.push(arr[i] += word[i]);
    }
    return arr.slice(0, arr.length - 1)
}

// console.log(spell('bee'));


// Objects ////////

// Return Student Names Write a program that takes an array of students and returns an array of student names. Example: [ { name: "Steve"}, { name: "Mike"}, { name: "John"} ]
// ➞ ["Steve", "Mike", "John"]

const students = [
    { name: "Steve", },
    { name: "Mike", },
    { name: "John" }
];

let arr = [];

for (let i in students) {

    arr.push(students[i].name)

}

// console.log(arr);


// Write a program to list the properties of an object. E.g. const student = { firstName: "Vikram", lastName: "Patel", class: 12 }; Expected Output: firstName, lastName, class

const student = { firstName: "Vikram", lastName: "Patel", class: 12 };

// console.log(Object.keys(student));

// Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "Vikram Patel is a 41 year old engineer living in Mumbai".

const person = {

    name: 'John',
    surname: 'Smith',
    age: 17,
    job: 'doctor'

}

//console.log(`${person.name}${person.surname} is ${person.age} years old and he is a ${person.job}.`);


// Write a JavaScript program to delete the "class" property (or last property) from the previous object.

const delLastProp = obj => {
    delete obj.job;//Object.values(obj) //[Object.values(obj).length - 1]
    return obj
}

console.log(delLastProp(person));



// Write a program to get the length of a JavaScript object.

const lengthObj = obj => Object.keys(obj).length


//console.log(lengthObj(person));

// Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// E.g. Output:

// Already read Funeral Rites by Jean Genet

// Already read Crash by JG Ballard

// You still need to read The Erstwhile by B.Catling

const library = [
    { author: 'Jean Genet', title: 'Funeral Rites', readingStatus: true },
    { author: 'JG Ballard', title: 'Crash', readingStatus: true },
    { author: 'B.Catling', title: 'The Erstwhile', readingStatus: false }
];

const valuesObj = obj => {

    for (let i in obj) {

        if (obj[i].readingStatus) {
            console.log(`Already read ${obj[i].title} by ${obj[i].author}`);

        } else {
            console.log(`You still need to read ${obj[i].title} by ${obj[i].author}`);
        }
    }
}

// console.log(valuesObj(library));

