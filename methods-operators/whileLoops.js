// let x = 10;

// while (x < 15) {
//     console.log(x);
//     x++;
// }

// while (x > 5) {
//     console.log(x);
//     x--;
// }

// let num = 5;

// while (num <= 50) {
//     console.log(num);
//     num += 5;
// }

// let counter = 1;
// let numToBeMultipled = 5;

// while (counter <= 10) {
//     let sum = counter * numToBeMultipled;
//     console.log(sum);
//     counter++;
// }

// while (counter <= 10) {
//     console.log(sum = counter * numToBeMultipled);
//     counter++;
// }

let counter = 1;

while (counter <= 10) {
    let num = counter % 2 === 0
        ? `The number ${counter} is even.`
        : `This number ${counter} is odd.`;
    console.log(num);
    counter++;
}

while (counter <= 10) {
    counter % 2 === 0
        ? console.log(`The number ${counter} is even.`)
        : console.log(`This number ${counter} is odd.`);
    counter++;
}