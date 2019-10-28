// Write a function that accepts several parameters and calculates the amount of money that will have been saved
// as a pension until a person retires. The parameters that should be defined are:
//
// The current age of the person // ex. 40
//
// The age that the person collects the pension // ex. 60
//
// The monthly wage the person earns // ex. 1000
//
// The percentage (as integer)  that the person saves each month // ex. 10%
//
// If the person has already retired then the message 'Calculate your past memories' should be printed.
//
// If not, then the program should calculate how many years remain until the person retires,
// the monthly income and take a specific percent of this income every month as saved money.
//
// Example: A lady is 40 years old, she retires at 65, she earns 2000€ per month and she saves  5% of it.
// How much money will she have saved until she retires? // This case is 30.000

function rent(currentAge, pensionAge, salary, porcentSaveMoney) {

    if (currentAge >= pensionAge) {

        return "Calculate your past memories"
    }

    else {

        // approach with some details

        // remainder = pensionAge - currentAge;
        // console.log(remainder);

        // saveMoney = salary * porcentSaveMoney / 100;
        // console.log(saveMoney);

        // totalSaveMoney = saveMoney * 12 * remainder;

        //return totalSaveMoney;

        return salary * porcentSaveMoney / 100 * 12 * (pensionAge - currentAge);
    }
}

let madam = rent(40, 65, 2000, 5);
console.log(madam);


// joseph approach

const pension = (currentAge, pensionAge, monthlyWage, percentageSaved) => {
    if (currentAge >= pensionAge) {
        return `You're past it my friend. Calculate your past memories`;
    } else {
        return (
            (pensionAge - currentAge) * ((monthlyWage * percentageSaved) / 100) * 12
        );
    }
};

console.log(pension(40, 65, 2000, 5));
