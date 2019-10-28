// Pay the employees today!

// Imagine that you are currently the big boss of a company.
// It is the first day of the month and you want to pay your employees.
// In the company there are now working 72 employees.The cashier/balance of your company now is 100.000$.
// You will use these to pay the salaries to your workers. 
// Your company is comprised of:

// 2 Data Scientists:1 Data Analyst: earns 7.500$
// 1 Machine Learning Engineer: earns 10.000$

// 10 web developers:
// 4 of them are Frontend Developers: each earns 1.500$
// 4 of them are Backend Developers: each earns 2.000$
// 2 of them are FullStack developers: each earns 3.000$

// 50 workers with ops and general duties:each earns 1.000$.

// 5 DevOps Engineers: each earns 5.000$

// 5 Project managers: each earns 4.000$




// Suppose you want to start paying them one by one and pay as many as you can.
// But there is an order. Everyone has an identifying number.

// The Data Scientists come first (from 1 to 2).

// Then the web devs (3 to 4, Full stack come first),

// (5 to 8, here come the Backend Devs), then the Frontend Devs.

// Then the normal workers.

// Then DevOps Engineers

// Project Managers last.

// Print a message to the console after the program to know exactly 

// howmany people have not received their payment yet, in order to keep track on the amount of people who are waiting for the salaries.

// Additionally print how much money is left in the balance after the payment.


// MY APPROACH

const budget = 100000;
let spentMoney = 0;
let id;
let totalWorkers = 72;
let salary = 10000;
let currentAmount = 100000;

for (id = 0; budget >= spentMoney + salary; id++) {
    if (id < 1) {
        spentMoney += 10000;
        id < 1 ? (salary = 10000) : (salary = 7500);

    } else if (id < 2) {

        spentMoney += 7500;
        id < 2 ? (salary = 7500) : (salary = 3000);

    } else if (id < 4) {

        spentMoney += 3000;
        id < 4 ? (salary = 3000) : (salary = 2000);

    } else if (id < 8) {

        spentMoney += 2000;
        id < 8 ? (salary = 2000) : (salary = 1500);

    } else if (id < 12) {

        spentMoney += 1500;
        id < 12 ? (salary = 1500) : (salary = 1000);

    } else if (id < 62) {

        spentMoney += 1000;
        id < 62 ? (salary = 1000) : (salary = 5000);

    } else if (id < 67) {
        spentMoney += 5000;
        id < 67 ? (salary = 5000) : (salary = 4000);

    } else {
        spentMoney += 4000;
        salary = 4000;
    }

    // in case you want to see every step!
    console.log(
        `${id} paid workers, the salary is ${salary}$ the spent money is ${spentMoney}$. Remain weight is ${budget -
        spentMoney}!`);
}

console.log(
    `I have paid ${id} workers, ${totalWorkers - id} have not still been paid. At the moment the budget amount is ${budget -
    spentMoney}$.`);



// BENJA APPROACH

// const budget = 100000;
// let spentMoney = 0;
// //let id = 72;
// let totalWorkers = 72;
// let salary = 10000;
// let currentAmount = 100000;

// for (id = 1; currentAmount - salary >= 0; id++) {

//     if (id <= 1) {
//         currentAmount -= 10000;
//         id === 1 ? (salary = 10000) : (salary = 7500);

//     } else if (id <= 2) {

//         currentAmount -= 7500;
//         id === 2 ? (salary = 7500) : (salary = 3000);

//     } else if (id <= 4) {

//         currentAmount -= 3000;
//         id === 4 ? (salary = 3000) : (salary = 2000);

//     } else if (id <= 8) {
//         currentAmount -= 2000;
//         id === 8 ? (salary = 2000) : (salary = 1500);

//     } else if (id <= 12) {

//         currentAmount -= 1500;
//         id === 12 ? (salary = 1500) : (salary = 1000);

//     } else if (id <= 62) {

//         currentAmount -= 1000;
//         id === 62 ? (salary = 1000) : (salary = 5000);

//     } else if (id <= 67) {
//         currentAmount -= 5000;
//         id === 67 ? (salary = 5000) : (salary = 4000);
//     }
//     else {

//         currentAmount -= 4000;
//         salary = 4000;
//     }

//     //in case you want to see every step!
//     // console.log(
//     //   `${id} container included, the current Weight is ${spentMoney}. Remain weight is ${maxWeight -
//     //     weightIncluded}!`
//     // );
// }

// console.log(
//     `I have paid ${id} workers, ${totalWorkers - id} have not still been paid. At the moment the budget amount is ${currentAmount}$.`
// );


// for (id = 72; currentAmount - salary >= 0; id--) {

//     if (id <= 5) {
//         currentAmount -= 4000;
//         id <= 5 ? (salary = 4000) : (salary = 5000);
//         console.log(id, currentAmount, salary);
//     }

//     else if (id <= 10) {
//         currentAmount -= 5000;
//         id <= 10 ? (salary = 5000) : (salary = 1000);
//         console.log(id, currentAmount, salary);
//     }

//     else if (id <= 60) {

//         currentAmount -= 1000;
//         id <= 60 ? (salary = 1000) : (salary = 1500);
//         console.log(id, currentAmount, salary);

//     }

//     else if (id <= 64) {

//         currentAmount -= 1500;
//         id <= 64 ? (salary = 1500) : (salary = 3000);
//         console.log(id, currentAmount, salary);

//     }


//     else if (id <= 68) {
//         currentAmount -= 2000;
//         id <= 68 ? (salary = 2000) : (salary = 3000);
//         console.log(id, currentAmount, salary);

//     }


//     else if (id <= 70) {

//         currentAmount -= 3000;
//         id <= 70 ? (salary = 3000) : (salary = 10000);
//         console.log(id, currentAmount, salary);

//     }

//     else if (id <= 71) {

//         currentAmount -= 10000;
//         id <= 71 ? (salary = 10000) : (salary = 7500);
//         console.log(id, currentAmount, salary);


//     }

//     else {
//         currentAmount -= 7500;
//         salary = 7500;

//         console.log(id, currentAmount, salary);

//     }
//     //in case you want to see every step!
//     // console.log(
//     //   `${id} container included, the current Weight is ${spentMoney}. Remain weight is ${maxWeight -
//     //     weightIncluded}!`
//     // );
// }

// console.log(
//     `I have paid ${totalWorkers - id} workers, ${id} workers have not still been paid. At the moment the budget amount is ${currentAmount}$.`
// );