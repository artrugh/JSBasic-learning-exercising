const name = 'Jose';
const lastName = 'Pastoral';

console.log(name + lastName);

console.log(name, lastName);

// method for a string
console.log(`My uncle is ${name}, last name ${lastName}.`);

//get the number of character
console.log(name.length);

// plus something
console.log(name.concat(" ", lastName));

console.log(name.concat(lastName));


// uper and lower case 
console.log(name.toUpperCase());
console.log(lastName.toLocaleLowerCase());

// get the position of a character
console.log(name.indexOf("1"));
console.log(name.indexOf('o'));
console.log(lastName.indexOf('a')); //1 pAstoral (1)
console.log(lastName.lastIndexOf('a'));

// get the character
console.log(name.charAt(2)); //s remember that it starts to count from 0
console.log(name[2]);

// get last character
console.log(name.charAt(name.length - 1)); //e

// substrating - means that with include the letter you write. ex. 0, 5 means the hole word deleting the last part.
console.log(lastName.substring(1, 5));

val = lastName.substring(1, 5); //p asto r
val = lastName.substring(5, 1); //asto
val = lastName.substring(2, 6); //stor
val = lastName.substring(6, 2); //stor
val = lastName.substring(0, 3); //P
val = lastName.substring(5); //ral

//slice -used more of arrays
console.log(lastName.slice(0, 4)); //past

//arrow method - remember that it starts to count from 0.

let jobArr = ["Developer", "Astronaut", "turtle-sitter", "statue", "cup of coffee"];
console.log(jobArr[3]); // statue

let array1 = ['one', 2, true];
console.log(array1[2]); //true

//replace
let str = 'Welcome to DCI'
console.log(str.replace("DCI", "the jungle"));
console.log(str.replace(/e/gi, 4)); // g means global and i insensitive Lower and Upper cases


//match, returns Object
console.log(str.match(/el/i)); ///[ 'Wel', index: 0, input: 'Welcome to DCI', groups: undefined ]

//includes(), returns boolean
console.log(str.includes("k", "t")); // true or false

//position in ASCII of a character.

console.log(str.charCodeAt(1));

//split = delete and convert in an array

console.log(str.split("e"));


// toString

let num = 4982;
console.log(num.toString());


var hello = "Hello world, welcome to the universe.";
console.log(hello.startsWith("Hello")); //true