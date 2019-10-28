// let x = 1;
// let y = 0;
// while (x <= 20) {
//   y += x;
//   x++;

//   console.log(y);
// }
// console.log(y);
// console.log(x);

for (i = 0; i < 13; i += 2) {
    console.log(i);
}

// i = 0; // initialization
// i < 3 // Condition or Exit condition
// increase i by 1 // final expression or incrementer
// for (initialization; Condition; final expression ) {
//     statement / code Block
// }


// Write a program that will iterate from 0 to 10. For each iteration of the for loop, 
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (let i = 1; i <= 10; i++) {
    console.log(`${i} * 9 = ${i * 9}`);
}

//ANOTHER EXAMPLE, NOW SEARCHING NUMBERS BETWEEN 1 - 50 DIVISIBLE BY 3 AND 5.

for (i = 1; i < 50; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        console.log(i);
    }

}

// let i = 0

// while (i < 50) {

//     if (i % 3 === 0 && i % 5 === 0) {

//         console.log(i);

//     }

//     i++

// }
