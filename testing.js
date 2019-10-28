// function fizzBuzz(currentNum, endNum) {
//   while (endNum >= currentNum) {
//
//     if (currentNum % 3 === 0 && currentNum % 5 === 0) {
//       console.log(`FizzBuzz`);
//     } else if (currentNum % 3 === 0) {
//       console.log(`Fizz`);
//     } else if (currentNum % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(currentNum);
//     }
//     currentNum++;
//   }
// }
//
// fizzBuzz(1, 10);

// function fizzBuzz(currentNum, endNum) {
//     for (let i = currentNum; i <= endNum; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log(`${i} FizzBuzz!`);
//         } else if (i % 3 === 0) {
//             console.log(`${i} Fizz!`);
//         } else if (i % 5 === 0) {
//             console.log(`${i} Buzz!`);
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(1, 200);
const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
//console.log(COLORS);


const value = ([colorOne, colorTwo]) => parseInt(COLORS.indexOf(colorOne).toString() + COLORS.indexOf(colorTwo).toString())


console.log(value(["red", "brown"]));






