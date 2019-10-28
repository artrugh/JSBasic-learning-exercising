// FIRST

// using split() and slice() methods to print the last subLink of the given link without the last "/"

// "www.google.com/lola/goo/cats/" => cats


const cats = link => {

    let a = link.split("/");
    console.log(a);
    return a[a.length - 2]
}

//console.log(cats("www.google.com/lola/jao/goo/cats/"));

const lastPath6 = str =>
    str.split("/")
    [str.split("/").length - 1] === "" ?
        str.split("/")[str.split("/").length - 2]
        : str.split("/")[str.split("/").length - 1];

//console.log(lastPath6("www.google.com/lola/jao/goo/jaja/cats/"));



// SECOND

//1) Given a point in a 3D space P = (x1, y1, z1), 
//create a function that calculates its distance to the origin 0 = (0, 0, 0). 
//Write first in ES5 syntax, then convert to ES6 with an arrow function.
//Challenge (optional): calculate the distance between two points P1 = (x1, y1, z1) and P2 = (x2, y2, z2).

//ES5

function dist5(x, y, z) {

    return Math.sqrt(x ** 2 + y ** 2 + z ** 2)
}

console.log(dist5(2, 2, 2));

//ES6

const dist6 = (x, y, z) => Math.sqrt(x ** 2 + y ** 2 + z ** 2);
console.log(dist6(2, 2, 2));


// Execise 2) Write a function that returns the 8 points (Pi = (xi, yi, zi), i = 0, ..., 7) 
// of a cube given the length of a side this cube (for example, length = 10). Hint: to make it easier, 
//you can put one point of your cube in the origin P0 = (0, 0, 0) and paralel to x, y and z axes, 
//and use arrays. See the image here: https://imgur.com/a/wvvKUIo Challenge: put your cube at any point.

function cube(len) {
    let points = [[0, 0, 0], [1, 0, 0], [1, 1, 0], [1, 0, 0], [0, 0, 1], [1, 0, 1], [0, 1, 0], [1, 1, 1]];
    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points[j].length; j++) {
            points[i][j] = points[i][j] * len;
        }
    }
    return points;
}

console.log(cube(20));

function cube(len) {
    let points = [[0, 0, 0], [0, 1, 0], [0, 1, 1], [0, 0, 1], [1, 0, 0], [1, 1, 0], [1, 0, 1], [1, 1, 1]];
    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points[j].length; j++) {

            points[i][j] = points[i][j] * len;

        }
    }

    return points;
}

console.log(cube(20));


// THIRD

// Select an ice cream dependent on the temperature given.

// Using a function select an ice cream dependent on the argument.

// Temperatures are

// < 12 = eat cake,

// > = 12 = chocolate,
// > = 18 = vanilla,
// > = 25 = strawberry,
// > = 30 = mango

const icecream = ["chocolate", "vanilla", "strawberry", "mango"];

const choice = function (x) {

    if (x >= 30) {
        return icecream[3];
    } else if (x >= 25) {
        return icecream[2];
    } else if (x >= 18) {
        return icecream[1];
    } else if (x >= 12) {
        return icecream[0];
    } else {
        return "eat cake";
    }
};

//console.log(choice(10));


//FOUR

//Create a function that takes two arguments, the first is an array and the second is a int
// See if the given number is greater or equal to any value in the array
// [1,2,3,4],5    => true
// [1,2,3,4],3    => false

// the given array = [23,43,12,34,45,32,65,43,75,32,12,"34"]
// the given int is 65
// change the values to check different results
//BONUS POINTS for not using a loop!!

const findName = (arg, a) => (Math.max(...arg) >= a ? false : true);

//console.log(findName([12, 54, 65, 34], 100));

// FITH

// Exercise 1: Check for boolean
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// const bol = a => a !== a ? true : false;
const bol = a => typeof a === "boolean" ? true : false;

// console.log(bol(3));



//SIXTH

// Exercise 2: Check for Index
// Return the lowest index at which a value (second argument) 
//should be inserted into an array (first argument) once it has been sorted.
//The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it 
//is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array
// has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).


// Easy solution: 

function getIndexToIns(arr, num) {

    arr.sort(function (a, b) { return a - b; });

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] >= num) {
            return i
        }
    }

    return arr.length;
}

//console.log(getIndexToIns([3, 5, 19, 23], 25));

const position = (arr, n) => {


    arr.push(n);

    //console.log(arr, n);
    return arr.sort((a, b) => a - b)

        .indexOf(n);
    //console.log(arr.sort());

};

// console.log(position([34, 5, 6, 23], 7));

