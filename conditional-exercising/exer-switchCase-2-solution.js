// Exercise JS Weekday/number

// Given the number of the day of the week, return the name of the weekday. Maybe you can use a switch for this task.

// Input: Number of the Day of the weekdays

// Output: Name of the Weekday

let weekDay = new Date().getDay();

switch (weekDay) {
    case 0:
        weekDay = 'Sunday';
        break;
    case 1:
        weekDay = 'Monday';
        break;
    case 2:
        weekDay = 'Tuesday';
        break;
    case 3:
        weekDay = 'Wednesday';
        break;
    case 4:
        weekDay = 'Thursday';
        break;
    case 5:
        weekDay = 'Friday';
        break;
    default:
        weekDay = 'Saturday';
        break;
}

console.log(weekDay);

let day = new Date().getDay();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

switch (days) {
    case days:
        console.log(`Today number is ${day} therefore it is a ${days[day]}.`);

}