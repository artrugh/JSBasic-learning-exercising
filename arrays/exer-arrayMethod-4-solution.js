// Q1. sort-an-array-of-numbers
// Write a function named sortArrNum that takes in an array of numbers and returns the array sorted from lowest to highest.

// Examples:

//const sortArrNum = [3, 5, 7, 1, 9, 0].sort((a, b) => a - b);  // returns [0, 1, 3, 5, 7, 9]
//const sortArrNum = [3, 5, 7, 1, 9, 0].sort((a, b) => b - a);
//console.log(sortArrNum);


// Q2. sort-an-array-of-strings
// Write a function named sortArrStr that takes in an array of strings and returns the array sorted alphabetically.

// Examples:

// const sortArrStr = ['cat', 'elephant', 'dog', 'walrus'].sort();  // returns ['cat', 'dog', 'elephant', 'walrus'].; 
// console.log(sortArrStr);

// Q3. sort-a-string
// Write a function named sortStr that takes in a string and returns a string of the letters sorted alphabetically.

// Examples:
// sortStr('big apple'); // returns ' abegilpp'

// const sortStr = 'hello'.split('').sort().toString().replace(/,/gi, "");  // returns 'ehllo'
// console.log(sortStr);

// const sortStr = str => [...str].sort().join("");
//console.log(sortStr("you and me"));



// Q4. reverse-an-array
// Write a function named arrReverse that takes in an array of numbers and returns an array of numbers in the reverse order.

// Examples:

// const arrReverse = [1, 2, 3, 4, 5].reverse();  // returns [5, 4, 3, 2, 1]
// console.log(arrReverse);

// Q5. reverse-string-2
// Write a function called reverseStr that uses the reverse method to reverse a string and return the reversed string. 
//Do NOT use a typical loop; just use the reverse method.

// Examples:

// reverseStr('hello'); //returns 'olleh'
// reverseStr('when am i?'); //returns ?i ma nehw'

const reverseStr = 'hello'.split('').sort().reverse().toString().replace(/,/gi, "");
//console.log(reverseStr);

// Q6. sort-objects
// Write a function named sortObjs that takes in an array of objects and sorts them alphabetically by their name property.

// Examples:

let obj = [{ name: 'lesane' }, { name: 'sean' }, { name: 'kendrick' }, { name: 'christopher' }, { name: 'young thug' }];
// returns [{name: 'christopher'}, {name: 'kendrick'}, {name: 'lesane'}, {name: 'sean'}, {name: 'young thug'}]

// take = obj => obj.sort((a, b) => a.name > b.name)
//console.log(take(obj));


//for (let i in obj) { newArr.push(obj[i].name) }
//console.log(newArr.sort()); //[ 'christopher', 'kendrick', 'lesane', 'sean', 'young thug' ]



// Q7. high-low-sort
// Write a function called highLow that uses the sort method to sort an array of methods from high to low.

// Examples:
// highLow([10,5,11,2,6,7,26]); //returns [26,11,10,7,6,5,2]
const highLow = [1, 2, 3, 4, 5].sort((a, b) => b - a); //returns [5,4,3,2,1]
//console.log(highLow);

// Q8. legal-drinking-age
// Write a function named checkDrinkingAge that takes in an array of objects,
// each of which has a name property and age property. The function should return true if everyone's 21 or older,
// and should return false if anyone is under 21.

// Examples:

const names = [{ name: "Adrian", age: 33 }, { name: "Jojo", age: 23 }, { name: "Cornelius", age: 26 }];  // returns true
// checkDrinkingAge([{name: "Tommy", age: 22}, {name: "Chucky", age: 24}, {name: "Lil", age: 20}]); // returns false
check = obj => {

    for (let i in obj) {

        if (obj[i].age < 21) {
            return false

        } else { return true }

    }


}

newcheck = arr => arr.every(value => value.age >= 21)
// console.log(newcheck(names));

//check(names);


//checkDrinkingAge = arr => arr.map(i => arr[i].age > 21 ? true : false);
// checkDrinkingAge = arr => arr.filter(i => arr[i].age > 21 ? true : false);
// console.log(checkDrinkingAge(names));


// Q9. implement-sort
// Write a function named sort that takes in an array of numbers and sorts them in order from lowest to highest.
//Do not use the built in .sort array method in your answer.

// Examples:

// sort([11, 2, 36, 4, 15]);  // returns [2, 4, 11, 15, 36]

//let newnum = [];

// min = arr => {
//     for (let i; arr[i] < arr.length; i++) {
//         if (arr[i] > )

// }

// }

let array = [11, 12, 36, 4, 15]

arr = [2, 8, 3, 12, 6, 10, 4, 1];

function quicksort(arr) {

    if (arr.length === 0) return arr;
    let left = [];
    let right = [];
    let pivot = arr[0];

    arr.forEach((num, index) => {
        if (index > 0) {
            if (num < pivot) left.push(num);
            else right.push(num);
        }
    })

    return quicksort(left).concat(pivot, quicksort(right));
}

//console.log(quicksort(array));

let sort = arr => {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (arr[j] > arr[j + 1]) {

                let temp = arr[j]; //12
                arr[j] = arr[j + 1]; //36
                arr[j + 1] = temp; // 12
            }
        }
    }
    return arr;
};

//console.log(sort(array));


