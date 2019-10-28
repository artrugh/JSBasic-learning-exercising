// Create an array filled with your friends' and family's names.
// Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc.

// **Bonus**: Print the indexes of each item in the array.
// Expected output example: Mike is at index 1 of my friends array.

const name = ['John', 'Tom', 'Jane', 'Maria', 'Carl'];
// let i = 0;

// while (i < name.length) {
//     console.log(`Hello ${name[i]}!`);
//     i++
// }

// for (i = 0; i < name.length; i++) {
//     console.log(`Hello ${name[i]}!`);
//     console.log(`${name[i]} is at the index ${i + 1} of my friends array`);

// }

// Grades
// Write a program to calculate the average marks of the following students.
// Then, this average is used to determine the corresponding grade for the class.

// John    90
// Tom 60
// Jane    77
// Maria   81
// Carl    65

// const marks = [90, 60, 77, 81, 65];
// let avg = [60, 70, 80, 90, 100];
// let avgRes = 0;
// let grades = ['A', 'B', 'C', 'D', 'F']


// for (i = 0; i < marks.length; i++) {
//     avgRes += marks[i] / marks.length;
// }


// for (let i = 0; i < marks.length; i++) {
//     if (avgRes < avg[i]) {
//         classGrade = grades[i];
//         break;
//     }
// }

// console.log(`The average class is ${avgRes} and its grade is ${classGrade} .`);


// The marks are graded as follows :
// Range   Grade
// <60  F
// <70  D
// <80  C
// <90  B
// <100 A



//ANOTHER EXER

// Create an array of 6 number. Print the following result:
// Multiply the first with the second 
//number and its result with the next number, and so on.

// const array = [1, 4, 6, 7, 8, 9];
// let result = 1;

// for (i = 0; i < array.length; i++) {
//     result *= array[i];
// }

// console.log(result);

// Fruity Group


/* 1. Declare 5 fruits. Using a 'while loop' console log all the fruits - up to and including fruit 2.
/ *2. Using the same fruits and using a 'for loop' console log all fruits omitting (except) fruit number 2.*/


// const fruit = ['apple', 'orange', 'lemon', 'apricose', 'melon'];
// let i = 0;



// while (i < fruit.length) {
//     console.log(fruit[i], "while loop, all fruits.");
//     i++
// }

// for (i = 0; i < fruit.length; i++) {

//     if (i != 1) {

//         console.log(fruit[i], "for loop, without second fruit.");
//     }
// }

// Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// for (i = 1; i <= 10; i++) {

//     for (a = 1; a <= 10; a++) {
//         mult = i * a;
//         console.log(mult);

//     }
// }


// The Car Race
// There is a track with a length of 50,8km.
// To finish the race, everybody has to go for 8 rounds.
// 5 drivers are participating.
// Each driver is going with differents speed.
// 1. car starts with 81km/h and is gaining each round 12km/h
// 2. car starts with 69km/h and is gaining each round 17km/h
// 3. car starts with 85km/h and is gaining each round 9km/h
// 4. car starts with 80km/h and is gaining each round 13km/h
// 5. car starts with 75km/h and is gaining each round 16km/h

// Who will finish first?

// Use loops god damn it!

let rase = 50.8 * 8;
let cars = [81, 69, 85, 80, 75];
let speed = [12, 17, 9, 13, 16];
let time = [0, 0, 0, 0, 0];

for (i = 0; i <= 7; i++) {

    //console.log(i);
    //  console.log(cars);

    if (i === 7) {

        for (b = 0; b < cars.length; b++) {

            time[b] += (rase / cars[b]);

        }

        //console.log(cars, time);
        break;

    }

    for (a = 0; a < cars.length; a++) {

        time[a] += (rase / cars[a]);
        //console.log(cars, 'dentro de for', time);
        cars[a] += speed[a];

    }

}

// console.log(cars, time); shows km/h in the last round and time of each driver.


let quickestDriver = Math.min.apply(Math, time); //short cut using math method
console.log(quickestDriver.toFixed(2));


let winner = time[time.length - 1];

// longer way using a loop.

for (a = 0; a < time.length; a++) {


    //console.log(time[a], winner);

    if (winner > time[a]) {
        winner = time[a];
        //console.log(winner, 'time of the winner'); if the last is the lower number doesn't print it. 
    }
}

console.log(winner.toFixed(2), 'time of the winner');



















