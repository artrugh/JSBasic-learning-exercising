
let pi = 3.14159;
//console.log(pi.toFixed(100000));  //Range error

// function foo() {
//     bar++;
// }

// let foos = foo(0);
// console.log(foos); //ReferenceError: bar is not defined

// if (foo) { //SyntaxError } the closing curly brace is missing

// let foo = {};  // TypeError
// foo.bar();

// decodeURIComponent("%"); // URIError

// EvalError = Don't use eval ()!

// try {
//     // attempt to execute this code
// } catch (exception) {
//     // this code handles exceptions
// } finally {
//     // this code always gets executed
// }

//CREATING EXCEPTIONS

// throw <error object>

// try lets us test for errors anda catch lets us handle those errors

// try {
//     myFunc(); // reference error
// } catch (e) {
//     console.log(e);
// }

// console.log("Script continues");

// try {
//     myFunc(); // reference error
// } catch (e) { // e means error and it is an object
//     console.log(e.name, e.message);
// }

// console.log("Script continues");

// try {
//     myFunc(); // reference error
// } catch (e) { // e means error and it is an object
//     console.log(e.name);
// } finally {
//     console.log("This will run no matter what");
// }

// console.log("Script continues");

// TypeError

// try {
//     null.myFunc()
// } catch (e) {
//     console.log(`${e.name} - not gonna work!`);

// }

// console.log("Program continues ..");

const user = { email: "maxmustermann@outlook.de" };

// if (!user.name) {
//     throw "User has no name!"
// }

// try {
//     if (!user.name) {
//         throw new SyntaxError("User has no name")
//     }
// }
// catch (e) {
//     console.log(`User error: ${e.message}`);

// } finally {
//     console.log(`Finally is running`);
// }

// console.log("Program continues!");


// const tipCalc = amount => {
//     return amount * 0.15
// }

// const result = tipCalc(true);
// console.log(result);

const tipCalc = amount => {
    if (typeof amount === "number") {
        return amount * 0.15
    } else {
        throw new Error("Input must be a number")
    }
}

// const result = tipCalc(true);
// console.log(result);

try {
    const result = tipCalc("blue");
    console.log(result);

} catch (e) {
    console.log(e.message);
}