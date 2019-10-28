// **Conditionals Exercises**

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use if statements to complete the following exercises. 
// **Print your results to the console**

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let numberOne = 20;
let numberTwo = 10;
let numberThree = 60;
if (numberOne >= 50 || numberOne <= 99) {
    console.log(true);
} else if (numberTwo >= 50 || numberOne <= 99) {
    console.log(true);
} else if (numberThree >= 50 || numberOne <= 99) {
    console.log(true);
}

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

if (numberOne >= 50 && numberOne <= 99) {
    console.log(true);
} else if (numberTwo >= 50 && numberOne <= 99) {
    console.log(true);
} else if (numberThree >= 50 && numberOne <= 99) {
    console.log(true);
}


// 3. Declare the variables a, b and c - give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 

let a = 14;
let b = 4;
let c = 22;

// console.log(Math.min(13, 63, 8923, -43, -Infinity)); //minimus number
console.log(Math.max(a, b, c)); //maximus number
if (a > b && a > c) {
    console.log(a);
} else if (b > c) {
    console.log(b);
} else {
    console.log(c);
}

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let city = "Berlin ist einer schöne Stadt!";
console.log(`Py ${city}`);

// 5. Calculate the sum of the two integers. If the sum is in the range 50..80 print 65 other wise print 80. 

if (a + b >= 50 && a + b <= 80) {
    console.log(65);
} else {
    console.log(80);
}
// 6. Check whether the sum of two integers is 8 or whether their difference is 8. If one of these is the case, print true.

if (a + b === 8 || (Math.abs(a - b) === 8)) {
    console.log(true);
}

// 7. Check whether one of two integers is 15 or if their sum is 15. If one of these is the case, print true. 

if (a === 15 || b === 15 || a + b === 15) {
    console.log(true);
}
// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

if (a % 7 == 0 || a % 11 == 0) {
    console.log(true);
}

// 9. Calculate the sum of the two given integers. If the two values are same, then print triple their sum. 

if (a === b) {
    console.log((a + b) * 3);
}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

if (a > 19) {
    console.log((a - 19) * 2);
}

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables.

let markMass = 60;
let johnMass = 50;
let markHeight = 1.8;
let johnHeight = 1.7;

// 2. Calculate both their BMIs and store their BMIs in variables. 

let markBMI = markMass / (markHeight * markHeight)
let johnBMI = johnMass / (johnHeight * johnHeight);
console.log(Math.round(markBMI), Math.round(johnBMI));

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.

let val = (markBMI > johnBMI);

// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? true"). 

console.log(`It's Mark's BMI higher than John's ${val}`);

// 5. Create an if statement which prints the name and BMI of the person with the highest BMI. 

if (markBMI > johnBMI) {
    console.log("Mark", Math.round(markBMI));
} else {
    console.log("John", jMath.round(johnBMI));
}


