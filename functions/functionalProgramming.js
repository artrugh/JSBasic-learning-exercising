
// const upperCaseFirstAndRemoveEs = str => {
//     let splitArr = str.split(' ');
//     //console.log(splitArr.indexOf('e'));

//     let filteredArr = splitArr.filter(str => str.indexOf('e') === -1).map(str => str.charAt(0).toUpperCase() + str.slice(1));
//     //console.log(filteredArr);

//     return filteredArr.join(' ');
// }

// // console.log(upperCaseFirstAndRemoveEs('this is a test string'));
// //"This Is A String"

// let str = {};
// //console.log(str[e]) //this using filter is saying to keep only the strings which have any "e", that why -1. 
// //In other words, to filter othe words without "e".

// const splitStr = str => str.split(' ');
// const removeWordsWithE = arr => arr.filter(str => str.indexOf('e') === -1);
// const capitalizeFirstLetter = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
// const joinArr = arr => arr.join(' ');

// //console.log(joinArr(capitalizeFirstLetter(removeWordsWithE(splitStr('this is a test string'))))); //"This Is A String"

// // const compose = (...funcs) => arg => funcs.reduce((cummulativeVal, func) => func(cummulativeVal), arg);

// // const removeEwordsAndCapitalizeFirst = compose(splitStr, removeWordsWithE, capitalizeFirstLetter, joinArr);

// console.log(removeEwordsAndCapitalizeFirst('this is a test string')); //'This Is A String'

// let numberOfSpaces = "The quick brown fox jumped over the lazy dogs."
// // returns 8. Make sure your function returns the result, rather than printing it.

// splitStIntoArr = str => [...str];
// filterSpaces = arr => arr.filter(x => x === " ");
// numbersOfSpaces = arr => arr.length;

// console.log(numbersOfSpaces(filterSpaces(splitStIntoArr(numberOfSpaces))));

// // const compose = (...funcs) => arg => funcs.reduce((cummulativeVal, func) => func(cummulativeVal), arg);

// // const numberOfSpace = compose(splitStIntoArr, filterSpaces, numbersOfSpaces);

// console.log(numberOfSpace(numberOfSpaces));

// console.log([...numberOfSpaces].filter(x => x === " ").length);



// let uniqString = str => {
//     var result = true;
//     var uniqs = {};
//     for (var i = 0; i < str.length; i++) {
//         if (uniqs[str[i]]) result = false;
//         else uniqs[str[i]] = true;
//     }
//     return result;
// }

// uniqString('hey'); //true
// uniqString('hello'); //false

// let uniqString = str => str.split('').reduce((resultsObj, str) => {
//     resultsObj[str] ? resultsObj.result = false : resultsObj[str] = true;
//     return resultsObj;
// }
//     , { result: true }).result;

// uniqString('hey'); //true
// uniqString('hello'); //false