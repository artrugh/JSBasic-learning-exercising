// Ternary Worksheet

let age = 16;
let beverage = age >= 16 ? 'Beer' : 'Mineral water';

console.log(beverage);



// 1. Declare a variable named canDrive. Check if someone's age is over 18. If so, print 'yes, can drive' and if not, print 'no, too young!'

let canDrive = age >= 18 ? 'can drive' : 'no, too young!';

console.log(canDrive);

// 2. Declare a variable named speedCheck. If speed is above 130km, print 'you're going too fast!'. If speed is lower than 130km, print 'You're driving below the speed limit'.

let speed = 100;
let speedCheck = speed >= 130 ? "you're going to too fast" : "you're driving below the speed limit"
console.log(speedCheck);

// 3. Declare a variable named personAge. If age is below 21, print "serve juice". Otherwise print "serve wine".

let personAge = age >= 21 ? 'serve juice' : 'serve wine';
console.log(personAge);

// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let student = true;
let isStudent = student === true ? 'Ticket costs $5' : 'Ticket costs $12';
console.log(isStudent);

// 5. Declare a variable named timeOfDay. Check if the time of day is 'morning' - if so, print "Good Morning". If not, print "Good Evening".

let time = 'Morning';
let timeOfDay = time === 'Morning' ? 'Good morning' : 'Good evening';
console.log(timeOfDay);

// let age = 18; already uo

if (age >= 18) {
    console.log("Let's drink beer");
}

if (age <= 18) {
    console.log('Have some milk, kid');
}

if (age > 18) {
    console.log('Beer me!');
} else if (age < 18) {
    console.log('Give me some milk');
} else if (age === 18) {
    console.log('You are 18');
}

let temp = 45;

if (temp <= 32) {
    console.log('Get your warm coat');
} else if (temp > 32 && temp <= 50) {
    console.log('Grab your jumper');
} else {
    console.log('Go swimming.');
}
