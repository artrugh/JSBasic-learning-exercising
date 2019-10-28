// Date Object
// 1. What day is it?
// Create a function to to display the current date and time in the following format: Today is Wednesday. The current time is 1PM : 34 : 59.

function DateTime() {
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = `Today is ${week[new Date().getDay()]}.`;
    let hour = new Date().getHours();
    let amPm = hour < 12 ? hour + "AM" : hour - 12 + "PM"
    let hours = day.concat(` The current time is ${amPm} : ${new Date().getMinutes()} : ${new Date().getSeconds()}.`);

    return hours
}

//console.log(DateTime());

// 2. Date Formats
// Create a function to display the current date in the following formats dd-mm-yyyy, dd/mm/yyyy.

function ddmmyyyy() {
    let time = new Date().getDay() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
    return time
}

function timeFunction() {
    let today = new Date();
    console.log(today.toLocaleDateString()); // 7/9/2019
    console.log(today.toLocaleDateString().replace(/\//g, "-")); //7-9/2019
};

timeFunction();

// console.log(ddmmyyyy());


// 3. Is New Year's day a Sunday?
// Create a function to check whether the 1st of January is a Sunday between the years of 2014 and 2050.


const days = new Date(2019, 2, 0).getDate();
const today = new Date(2019, 0, 0).getDay()
//console.log(today);

function SundayNewYear(yearOne, YearTwo) {
    if (yearOne === YearTwo) return `In ${yearOne} is ${new Date(yearOne, 0, 0).getDay() === 0}/`
    else { return `In ${yearOne} is ${new Date(yearOne, 0, 0).getDay() === 0}/` + SundayNewYear(yearOne + 1, YearTwo) }
}

//console.log(SundayNewYear(2014, 2050));

// 4. How many days till Christmas?
// Create a function to calculate the days till Christmas.

function DaysTillChristmas() {
    let today = new Date();
    let year = new Date().getFullYear();
    let Christmas = new Date(year, 11, 26);
    return `${Math.ceil((Christmas - today) / 86400000)} till Christmas.`
}


//console.log(DaysTillChristmas());


// 5. Days in a month
// Create a function to calculate the number of days in a specified month. Examples and Expected Output:

// getDaysInMonth(1, 2012); --> 31
// getDaysInMonth(2, 2012); --> 29
// getDaysInMonth(9, 2012); --> 30
// getDaysInMonth(12, 2012); --> 31

function DaysInMonth(month, year) { return new Date(year, month, 0).getDate() };

// console.log(DaysInMonth(4, 2012));
