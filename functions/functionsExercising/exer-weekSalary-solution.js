// Write a function that calculates how much money someoneisgoing to earn until
//  the end of the week by just accepting a number from 1to 7 that represents the days of the week. 

//  (1 isfor Monday, 2 for Tuesday, etc 7 is for Sunday).

//Given someoneearns 10$ per hour and hisworking schedule is this:

//Monday: works 4hours
//Tuesday: works 6hours
//Wednesday: works 8 hours
//Thursday: works 10hours
//Saturday: works 2 hours
//Fridays and Sundays are days-off.

// For example: if we executecalculateRestOfWeekMoney(3)
//   The number 3 is passed as argument indicates thattoday is Wednesday so we calculate from Wednesday 
// (included) until Sunday.WithcalculateRestOfWeekMoney(4) we start counting from Thursday until Sunday etc.


const calculateWage = day => {
    let hours = [4, 6, 8, 10, 0, 2, 0];
    let total = 0;

    for (let i = day - 1; i < hours.length; i++) {
        //   console.log(i);

        total += hours[i] * 10;
    }

    return total;
}

console.log(calculateWage(4));

// Dennis approach

const earnings = (...args) => {
    //multiply args together
    if (args[4])
        return `${args[0] * 10 +
            args[1] * 10 +
            args[2] * 10 +
            args[3] * 10 +
            args[4] * 10}$`;
    // from Wednesday rest of the week, earns
    if (args.length <= 4)
        return `${args[0] * 10 + args[1] * 10 + args[2] * 10 + args[3] * 10}$`;
};
console.log(earnings(4, 6, 8, 10, 2));
console.log(earnings(8, 10, 0, 2));


// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

// Examples:

// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
// Notes For your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 
// 'i's with 1, 'o's with 0, and 's's with 5.


const codedWord = word => word
    .replace(/a/gi, 4)
    .replace(/e/gi, 3)
    .replace(/i/gi, 1)
    .replace(/o/gi, 0)
    .replace(/u/gi, 5);

console.log(codedWord("lalaAlOhuE"));

// Benja approach

function code(string) {
    let lowerString = string.toLowerCase();
    let letters = lowerString.split("");
    let hackerSpeak = [];
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === "a") {
            letters[i] = "4";
            hackerSpeak.push(letters[i]);
        } else if (letters[i] === "e") {
            letters[i] = "3";
            hackerSpeak.push(letters[i]);
        } else if (letters[i] === "i") {
            letters[i] = "1";
            hackerSpeak.push(letters[i]);
        } else if (letters[i] === "o") {
            letters[i] = "0";
            hackerSpeak.push(letters[i]);
        } else if (letters[i] === "s") {
            letters[i] = "5";
            hackerSpeak.push(letters[i]);
        } else {
            hackerSpeak.push(letters[i]);
        }
    }
    let hacked = hackerSpeak.join("");
    return hacked;
}

console.log(code("Welcome to the matrix"));


// Create a function that accepts a string,
// checks if it's a valid email address and returns either true or false, depending on the evaluation.
//
// **Notes**
// * The string must contain an @ character.
// * The string must contain a . character.
// * The @ must have at least one character in front of it.
// * e.g. "john@example.com" is valid while "@example.com" is invalid.
// * The . and the @ must be in the appropriate places.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.

const checkMail = mail => {

    if (mail.includes("@")
        && mail.includes(".")
        && mail.indexOf('@') > 0
        && mail.indexOf('@') < mail.lastIndexOf('.')
        && mail[0] !== "@") {
        return true;
    } else { return false; }

}

console.log(checkMail("aa@otmail.com"));


// Benja approach

function validate(email) {
    let atSymbolPos = email.indexOf("@");
    let dotPos = email.indexOf(".");
    if ((email.includes("@")) && (atSymbolPos > 0) && (email.includes(".")) && (dotPos > atSymbolPos)) {
        return `${email} is valid`
    } else {
        return `${email} is invalid`;
    }
}





