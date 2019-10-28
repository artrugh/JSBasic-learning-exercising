// CAL;;BACK FUNCTIONS

// A callback function is a function passed into another function as an argument which is then invoked outside the outer function to complete some 
// kind of routine or action. A function that accepts pther functions as arguments is called a HIGHER ORDER FUNCTION which contains the logic
// for wwhen the callback function gets executed.

// A function is a value representing an "action"
// Regular values like strings or numbers represent the data
// A function can be perceived as an action
// We can pass it between variables and run when we want.

// WHY WE NEED CALLBACK FUNCTIONS

// function first() {
//     console.log(1);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// BUT ...

// function firstFunc() {
//     // simulate a code delay
//     setTimeout(function () {
//         console.log(1);
//     }, 5);
// }

// function secondFunc() {
//     console.log(2);

// }

// firstFunc();
// secondFunc();

// Even though we involked the firstFunc() first, we logged out the resilt after secondFunc()
// Its not that JavaScript did not wait for a response from firstFunc(), before moving on to the secondFunc()
// You can not just call one function after another and hope the execute in the right order

// Callbacks are a way to make sure certain code does ot execute until another code has finished its execution.

// doHomework = subject => console.log(`Starting my ${subject} homework`); 

// doHomework('geometry');

// ---------------

// doHomework = (subject, callback) => { console.log(`Starting my ${subject} homework.`); callback(); }

// doHomework("chemistry", function () { console.log('Finished my homework'); })

// doHomework = (subject, callback) => { console.log(`Starting my ${subject} homework.`); callback(); }

// alertFinished = () => console.log("Finished my homework.");

// doHomework('History', alertFinished)


const someArr = [3, 5, 6, 10, 7, 3];

myMap = (myArr, callback) => {
    let arr = [];
    for (let i = 0; i < myArr.length; i++) {
        arr.push(callback(myArr[i]));
    } return arr;
}


//console.log(myMap(someArr, (x) => x + 1));



myFilter = (myArr, callback) => {
    let arr = [];
    for (let i = 0; i < myArr.length; i++) {
        if (callback(myArr[i]))
            arr.push(myArr[i])
    }
    return arr
}

//console.log(myFilter(someArr, (x) => x > 5));

myFind = (myArr, callback) => {

    for (let i = 0; i < myArr.length; i++) {
        if (callback() === myArr[i])
            return myArr[i]
    }

}

//console.log(myFind(someArr, (x) => x = 6));

//console.log(myFilter(someArr, (x) => x > 5));

myFindIndex = (myArr, callback) => {

    for (let i = 0; i < myArr.length; i++) {
        if (callback() === myArr[i])
            return myArr.indexOf(myArr[i])
    }

}

console.log(myFindIndex(someArr, (x) => x = 6));


myReduce = (myArr, callback) => {
    let result = 0;
    for (let i = 0; i < myArr.length; i++) {
        if (callback(myArr[i]))
            result += (myArr[i])
    }
    return result
}

// //console.log(myReduce(someArr, (x) => x > 5));


myEvery = (myArr, callback) => {
    let arr = [];
    for (let i = 0; i < myArr.length; i++) {
        if (callback(myArr[i]))
            arr.push(myArr[i])
    }
    return arr.length === myArr.length
}

//console.log(myEvery(someArr, (x) => x > 0));

// myForEach = (myArr, callback) => {
//     for (let i = 0; i < myArr.length; i++) {
//         callback(myArr[i])
//     }
// }

// // // const someArr = [3, 5, 6, 10, 7, 3];
//console.log(myForEach(someArr, (x) => { console.log(x + 5); }));

myForEach = (myArr, callback) => {

    for (let i = 0; i < myArr.length; i++) {
        callback(myArr[i])

    }

}

// const someArr = [3, 5, 6, 10, 7, 3];

//console.log(myForEach(someArr, (i) => console.log(i)));