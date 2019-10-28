// function milesToKm(miles) {
//     kg = miles * 1.6;
//     return kg;
// }
// console.log(milesToKm(10));


// function dolarToEuro(dolar) {
//     euro = dolar / 1.12;
//     return euro;
// }
// console.log(dolarToEuro(100));


// function lbsToKg(lb) {
//     kg = lb * 0.453;
//     return kg;
// }
// console.log(lbsToKg(10));


// function askName(a = "remember to write your name", b = "remember to write your surname") {
//     return "Hello, " + a + " " + b + ".";
// }
// console.log(askName());


// function argToEuros(arg) {
//     euros = arg * 0.020;
//     return euros;
// }

// console.log(argToEuros(9500));

// function dataType(arg) {
//     return typeof arg;
// }

// let type = dataType('send');
// console.log(type);


// function addUp(num) {
//     let result = 0;
//     for (i = 0; i <= num; i++) {

//         // console.log (i + "alone");

//         result += i;
//         // console.log(result);
//     }

//     return result;
// }

// console.log(addUp(4));


// // OTHER WAYS TO WRITE A CODE :)

// const adder = function (a, b) {  // This variable gets the value of the function.
//     return a + b;
// };

// // convert weight on earth to weight on moon.

// const moonKg = function (earthWeight) {
//     return (earthWeight / 9.81) * 1.622;
// };

// console.log(moonKg(100));

// const moonKg = earthWeight => (earthWeight / 9.81) * 1.622;

// // variable = argument => return

// console.log(moonKg(60));


// // get the factorial number of a number.


// function factorial(stopper) {

//     let result = 1;

//     for (i = 1; i <= stopper; i++) {
//         result *= i;
//     }

//     return result;
// }

// let example = factorial(5);

// console.log(example);



// // another approach - just differences in the way it was written.


// const example = function (stopper) {

//     let result = 1;

//     for (i = 1; i <= stopper; i++) {
//         result *= i;

//     }

//     return result;

// }

// console.log(example(5));


// const example = stopper => {

//     let result = 1;

//     for (i = 1; i <= stopper; i++) {
//         result *= i;

//     }

//     return result;

// }

// console.log(example(5));




// pure function - local score

const add = (a, b) => a + b;
console.log(add(2, 3));



// non pure function - global score

const myName = 'Max';
const sayName = mySurname => `${myName} ${mySurname}`;

console.log(sayName("Mustermann"));



// pure function - local score

//const fullName = (mySurname, myName) => `${myName} ${mySurname}`;

const fullName = (mySurname, myName) => myName + mySurname;

console.log(fullName("Tom", "Morello"));





















