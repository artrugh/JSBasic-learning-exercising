// #Conditionals Exercises P2
// **Print your results to the console**

// 1. Make a variable for firstName and age and give each variable values.
// Create an if/else statement to check whether the person's age is less than 13. 
// If so, print "firstName is a boy/girl". If the age is equal to or more than 13 and less than 20,
// print "firstName is a teenager". If the person's age is equal to 20 and less than 30, then print 
// "firstName is a young man/woman". If none of these conditions apple, print "firstName is a man/woman". 

let firstName = 'Maria';
let age = '45';

if (age < 13) {
    console.log(`${firstName} is a boy/girl`);
} else if (age >= 13 && age <= 20) {
    console.log(`${firstName} is a teeneger`);

} else {
    console.log(`${firstName} is a man/woman`);

}



// 2. John and Mike both play basketball in different teams. In the latest 3 games, John's team
//  scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.


// > Calculate the average score for each team.

let averJohn = (89 + 120 + 103) / 3;
let averMike = (116 + 94 + 123) / 3;
console.log(averJohn);
console.log(averMike);



// > Decide which teams wins in average (highest average score),
// and print the winner to the console. Also include the average score in the output.

if (averJohn > averMike) {
    console.log(`John won: ${averJohn}`);

} else if (averJohn > averMike) {
    console.log(`Mark won: ${averMike}`);

} else {
    console.log(`It was a draw`);
}
// > Then change the scores to show different winners. Don't forget to take
// into account there might be a draw (the same average score).


// > Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

let averMary = ((97 + 134 + 105) / 3);
console.log(averMary);

// > Like before, change the scores to generate different winners, keeping in mind there might be draws.

if (averJohn > averMike && averJohn > averMary) {

    console.log(`John won: ${averJohn}`);

} else if (averMike > averMary) {

    console.log(`Mike won: ${averMike}`);

} else if (averJohn === averMike && averMike === averMary) {

    console.log(`Draw between all the teams`);

} else if (averJohn === averMike) {

    console.log(`Draw between John and Mike`);

} else if (averJohn === averMary) {

    console.log(`Draw between John and Mary`);

} else if (averMike === averMary) {

    console.log(`Draw between Mike and Mary`);

} else {
    console.log(`Mary won: ${averMary}`);

}



// 3. Calculate the student average mark and then give the student a grade. 


// student marks = 90, 64, 75, 83, 80, 55
// - A+ if the average is greater than 90. 
// - A if the average is greater than 80 and less than or equal to 90	. 
// - B+ if the average is greater than 70 and less than or equal to 80. 
// - B if the average is greater than 60 and less than or equal to 70. 
// - C+ if the average is greater than 50 and less than or equal to 60. 
// - C if th}e average is greater than 40  and less than or equal to 50. 
// - D if the average is greater than 30 and less than or equal to 40. 
// - F if the average is less than or equal to 30.

let averStudents = ((90 + 64 + 75 + 83 + 80 + 55) / 6);
console.log(averStudents);


if (averStudents > 90) {
    console.log("A+");
} else if (averStudents > 80 && averStudents <= 90) {
    console.log("A");
} else if (averStudents > 70 && averStudents <= 80) {
    console.log("B+");
} else if (averStudents > 70 && averStudents <= 60) {
    console.log("B");
} else if (averStudents > 60 && averStudents <= 50) {
    console.log("C+");
} else if (averStudents > 50 && averStudents <= 40) {
    console.log("C");
} else if (averStudents > 40 && averStudents <= 30) {
    console.log("D");
} else if (averStudents <= 30) {
    console.log("F");
}



// 4. Make an if/else statement depending on the weather today!
// Create a variable named "temperature" and "weather".
// Then, create outputs based on the variable values e.g.
// if ((temperature > 15) && (weather === 'sunny') {
//     console.log(`It is ${temperature} degrees outside and ${weather}`.
// }

// Do this for sunny weather, rainy weather, snow and an overcast sky.


let temperature = -5;
let weather = ["sunny", "raining", "snowing", "overcasted"];

if (temperature > 15) {

    console.log(`It is ${temperature} degrees outside and ${weather[0]}.`);
} else if (temperature > 10) {

    console.log(`It is ${temperature} degrees outside and ${weather[1]}.`);

} else if (temperature > 0) {

    console.log(`It is ${temperature} degrees outside and ${weather[2]}.`);
}
else {
    console.log(`It is ${temperature} degrees outside and ${weather[3]}.`);
}


// 5. Make an if/else statement depending on a person's job. 
// Create two variables "firstName" and "job". 
// Print different outputs depending on the value of "job" eg. "Maria is a teacher in Berlin" / "Maria is a designer in Berlin". 
// Make 5 different possible outcomes depending on the value of job.



let jobArr = ["teacher", "layer", "doctor", "office-worker", "unemployed"];
let job = "unemployed";

if (job === jobArr[0]) {
    console.log(`${firstName} is a ${jobArr[0]} in Berlin`);

} else if (job === jobArr[1]) {
    console.log(`${firstName} is a ${jobArr[1]} in Berlin`);

} else if (job === jobArr[2]) {
    console.log(`${firstName} is a ${jobArr[2]} in Berlin`);

} else if (job === jobArr[3]) {
    console.log(`${firstName} is a ${jobArr[3]} in Berlin`);

} else if (job === jobArr[4]) {
    console.log(`${firstName} is a ${jobArr[4]} in Berlin`);
}


// 6. Determine whether a given year is a leap year in the Gregorian calendar. 

let year = 2020

if (year % 4 === 0) {

    console.log(`${year} is leap year.`);

} else {

    console.log(`${year} is not a leap year.`);

}


// 7. Check if a number is divisible by 3. If it is, print "Fizz". Check if a number is divisible by "5".
// If it is, print "Buzz". Check is a number is divisible by both 3 and 5. If it is, print "FizzBuzz". 
//If none of the above apply, print the number. 

let number = 15;

if (number % 3 === 0 && number % 5 === 0) {

    console.log("FizzBuzz");

} else if (number % 3 == 0) {

    console.log("Fizz");

} else if (number % 5 == 0) {

    console.log("Buzz");

} 
