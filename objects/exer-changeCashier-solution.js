//The Cashier Problem
// Create a program that helps a cashier give adequate change to customers. The program should return the amount of notes and coins for the customer's change.

// Example: If the price is €3.75 and the paid amount is €50, then the client should receive €46.25 back in change.

// The expected output should be:
// 2 x €20 // 2 twenty euro notes
// 1 x €5 // 1 five euro note
// 1 x €1 // 1 euro
// 1 x €0.2 // 1 twenty cent coin
// 1 x €0.05 // 1 five cent coin
// Example: Price: €4.50, Paid amount: €20, Change: 15.50

// Expected output:

// 1 x €10

// 1 x €5

// 1 x €0.5

// Notes

// Include outputs for exceptions e.g. price: €4, paid amount: €3.

let change = [
    { note: 200, amount: 0 },
    { note: 100, amount: 0 },
    { note: 50, amount: 0 },
    { note: 20, amount: 0 },
    { note: 10, amount: 0 },
    { note: 5, amount: 0 },
    { note: 2, amount: 0 },
    { note: 1, amount: 0 },
    { note: 0.5, amount: 0 },
    { note: 0.2, amount: 0 },
    { note: 0.1, amount: 0 },
    { note: 0.05, amount: 0 },
    { note: 0.02, amount: 0 },
    { note: 0.01, amount: 0 }
]

// function ChangeCashier(paid, price, obj) {

//     let change = paid - price;

//     if (change > 0) {

//         for (i in obj) {

//             if (change >= obj[i].note) {
//                 obj[i].amount = Math.floor(change / obj[i].note);
//                 change = change % obj[i].note.toFixed(2);
//             }

//         } return obj
//     }

//     else { return `$${paid} is not enough money to pay $${price}.` }

// }

// console.log(ChangeCashier(10, 134.8, change));


function ChangeCashier(paid, price, obj) {

    let change = paid - price;

    if (change > 0) {

        obj.map(elem => {

            if (change >= elem.note) {

                elem.amount = Math.floor(change / elem.note);
                change = change % elem.note.toFixed(2);
            }
        })

        return obj
    }

    else { return `$${paid} is not enough money to pay $${price}.` }

}

console.log(ChangeCashier(10030, 134.8, change));
