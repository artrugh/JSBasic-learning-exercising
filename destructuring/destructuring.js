// // The destructuring assigment syntax is a JavaScript expression that makes it
// // possible to unpack values from arrays or properties from objects into distinct variables

// // REST IN ARRAY DESTRUCTURING

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(a); //10
// console.log(b); //20
// console.log(rest); // 30, 40, 50

// const x = [1, 2, 3, 4, 5];
// let [y, z] = x;
// console.log(y); //1
// console.log(z); //2

// const foo = ['one', 'two', 'three']
// let [one, two, three] = foo;
// console.log(one); // 'one'
// console.log(two);  // 'two'
// console.log(three); // 'three'



// let a, b;
// [a, b] = [1, 2];
// console.log(a); //1
// console.log(b); //2

// //  DEFAULT VALUES
// let a, b;
// [a = 5, b = 7] = [1]  // assig a new value to the items
// console.log(a); //1
// console.log(b); //7

// let a, b;
// [a = 5, b = 7] = [, 1] // , means second items
// console.log(a); //5
// console.log(b); //1

// let a, b;
// [a = 5, b = 7] = [1, 9] /
// console.log(a); //1
// console.log(b); //9

// // SWAPPING VARIABLES

// let a = 1;
// let b = 3;
// [a, b] = [a, b]
// console.log(a); //1
// console.log(b); //3

// // ASSIGNING THE REST OF AN ARRAY TO A VARIABLE

// const [a, ...b] = [1, 2, 3, 4, 5, 6];
// console.log(a); // 1
// console.log(b); // [ 2, ..., 6]

// // OBJECT DESTRUCTURING

// const lunch = {
//     Adrian: 'mineral water',
//     Nizar: 'Humus',
//     Richard: 'Salat'
// }

// const { Adrian, Nizar, Richard } = lunch;
// console.log(Adrian); // mineral water
// console.log(Richard, Nizar); // salat Humus

// const o = { p: 43, q: true };
// let { p, q } = o;
// console.log(p);
// console.log(q);

// // ASSIGNMENT WITHOUT DECLARATION
// // A variable can be assigned its value with destructuring seperate from its declaration

// let a, b;
// ({ a, b } = { a: 1, b: 2 });
// console.log(a); // 1
// console.log(b); // 2

// // ASSIGNING TO NEW VARIABLE NAMES
// // A property can be unpacked from an object and assigned to a variable with a different name than the object property

// const o = { p: 42, q: false };
// const { p: foo, q: baz } = o
// console.log(foo); //42
// console.log(baz); //false
// console.log(o.p); //42

// // COMBINED ARRAY AND OBJECT DESTRUCTURING

const propos = [
    { id: 1, name: 'Fizz' },
    { id: 2, name: 'Buzz' },
    { id: 3, name: 'FizzBuzz' }
];

const [, , { name }] = propos;

console.log(name); // FizzBuzz

const [, , { id }] = propos;

console.log(id); // FizzBuzz

















