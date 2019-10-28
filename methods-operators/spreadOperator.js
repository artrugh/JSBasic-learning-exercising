// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

SumArg = (...args) => args.reduce((acc, cur) => acc + cur);
// console.log(SumArg(3, 2, 4));

sum = (...theArgs) => theArgs.reduce((previous, current) => previous + current);

// console.log(sum(1, 2, 3));


// Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings),
// and returns the sum of only the numbers.

// addOnlyNums(1, 'cat', 3, 4); //8

addOnlyNums = (...args) => args.filter(cur => typeof cur === "number").reduce((acc, cur) => acc + cur);

// console.log(addOnlyNums(1, 'cat', 3, 4));

//doesn't works


// - Write a function called `countTheArgs` that can take any number of arguments, and returns the number of arguments that are passed in.

// ```js
// countTheArgs('cat', 'dog'); //2
// countTheArgs('cat', 'dog', 'frog', 'bear'); //4

function countTheArgs(...args) { return args.length }
//console.log(countTheArgs('cat', 'dog', 4));


// Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).

function combineAllArrays(arr1, arr2) { return [...arr1, ...arr2] }
//console.log(combineAllArrays([3, 2, 4], [32, "a"]));

// Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.

// sumEveryOther(5, 6, 3, 4, 1); //9
// sumEveryOther(10, 2, 11); //21

// Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments.
// onlyUniques('cat', 'cat', 'dog', 'pig'); //['cat', 'dog', 'pig']

const outOfNames = (...args) => [...new Set(args)];

//console.log(outOfNames('bird', 'cat', 'snake', 'cat', 'dog', 'frog'));


// onlyUniques(1, 4, 7, 1, 2, 7, 4); //[1, 4, 7, 2]

function uniqueNum(...args) {
    let obj = {}; //create an object to counter items of an array.
    args.forEach(x => {
        obj[x] = (obj[x] || 0) + 1; // if the item repeat itself the element of the object willc count it
    }); // '2': 1, '5':1, '7':2,...

    return Object.keys(obj).filter(x => obj[x] === 1)
        .map(x => x = parseInt(x)) // return only keys, not the values, filter values === 1
    // (not been repeated < 1), and return not strings '4', but a number (parseInt())

};

//console.log(uniqueNum(3, 3, 4, 5, 6, 2, 7, 4));


// Write a function called combineAllArrays that takes in any number of arrays as arguments and combines all of them into one array.
function combineAll(...args) { return [...args] };
//console.log(combineAll(2, ['a', 4], "Hola"));

// Write a function called squareAndSum that takes in any number of arguments, squares them, then sums all of the squares.

// sumAndSquare(2, 4, 3); //29
// sumAndSquare(1, 2); //5

SumSquArg = (...args) => args.reduce((acc, cur) => acc + Math.pow(cur, 2));
//console.log(SumSquArg(3, 2, 4));