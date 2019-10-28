// # Switch Statements

// ## Please log all your answers to the console. Remember to add defaults to your switch statements. 

// #### 1. Color Analyzer 
// Create a function that takes a string in its parameters. Console log a different statement for each color (red, blue, green, yellow). 
// * Example: analyzeColor("Red") -> "Red is a primary color". 

let color = 'red'

switch (color) {
    case 'red':
        color = `${color} is a primary color`
        break;
    case 'blue':
        color = `${color} is a cool color`
        break;
    case 'green':
        color = `${color} is the color of the hope`
        break;

    case 'yellow':
        color = `${color} is the color of this text`
        break;
    default:
        color = `There are as many color as much light is in the world, unfortunately I could not fine your`
        break;
}

console.log(color);

// #### 2. Grading 
// Create a function that takes a grade in its parameters. Console log comments depending on the grade. 
// * Example: grade("A") -> "Good job!", grade("F") -> "Failed"

let lang = 'english'
let greeting = ['Hallo', 'Salut', 'Buenas', 'Ciao', 'Hello'];

switch (lang) {
    case 'german':
        greeting = greeting[0]
        break;
    case 'french':
        greeting = greeting[1]
        break;
    case 'spanish':
        greeting = greeting[2]
        break;
    case 'italian':
        greeting = greeting[3]
        break;
    case 'english':
        greeting = greeting[4]
        break;
    default:
        greeting = 'non definded language'
        break;
}

console.log(greeting);


// #### 3. What month is it? 
// Create a function using the new Date().getMonth() method and switch case in order to return 
//the month of the year. Return "It's the month of May!"

const nowMonth = new Date().getMonth();
console.log(nowMonth);

let month = ['January', 'Febraury', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'December'];


switch (nowMonth) {
    case 0:
        month = month[0]
        break;
    case 1:
        month = month[1]
        break;
    case 2:
        month = month[2]
        break;
    case 3:
        month = month[3]
        break;
    case 4:
        month = month[4]
        break;
    case 5:
        month = month[5]
        break;
    case 6:
        month = month[6]
        break;
    case 7:
        month = month[7]
        break;
    case 8:
        month = month[8]
        break;
    case 9:
        month = month[9]
        break;
    case 10:
        month = month[10]
        break;
    case 11:
        month = month[11]
        break;
    default:
        month = "It isn't anu month"
        break;
}

console.log(month);


// #### 4. Fruits
// Create a function that takes a string in its parameters. Console log a different statement for each fruit (e.g. banana, orange, strawberry, apple). 
// * Example: fruits("Orange") -> Great choice! An orange is full of vitamin C!"


let fruit = 'apple'
//let greeting = ['banana', 'orange', 'apple', 'strawberry'];

switch (fruit) {
    case 'banana':
        fruit = `Always the best choice, yellow as a ${fruit}.`
        break;
    case 'orange':
        fruit = `My favourite, the ${fruit} is full of juice.`
        break;
    case 'apple':
        fruit = `The nicer fruit, isn't it? Guess! The ${fruit}.`
        break;
    case 'strawberry':
        fruit = `Mmmm, so delicuos, a ${fruit} or many of them.`
        break;
    default:
        greeting = 'Actually, I do not like your choice.'
        break;
}

console.log(fruit);


