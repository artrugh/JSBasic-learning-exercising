
//1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

var string = 'I can walk in the park all the day!'
// console.log(string.indexOf('p'));
console.log(string.lastIndexOf("k") + 1);
console.log(string.slice(string.indexOf("park"), (string.lastIndexOf("k") + 1)));


//2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

var js = 'JavaScript'
console.log(js[3] + js[4] + js[5]);


//3. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

var world = 'Hello World'
console.log(world.toUpperCase());

//4. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.

var earth = 'Hello Earthling'
console.log(earth.toLowerCase());

//5. Check if the sentence "nice shoes" contains the letter l or n. 

var shoes = 'nice shoes'
console.log(shoes.includes('l' || 'n'));


//6. Create a new string from a given string with the first character of the given string added at the front and back. example of exepected output: JavaScript => JJavaScriptJ

console.log(js[0] + js + js[0]);


//7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
//eg. of output: javascript => iptJavaScriptipt

let last = js.charAt(js.length - 3) + js.charAt(js.length - 2) + js.charAt(js.length - 1);
console.log(last + js + last);


//8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes "Java".

console.log(js.toUpperCase());
console.log(js.toUpperCase() + js.includes('Java'));
console.log(js.toUpperCase(), js.includes('Java'));
console.log(js.toUpperCase().includes('JAVA'), js.toUpperCase().includes('Java'));

//9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. eg. of output JavaScript => tavaScripJ


console.log(js.charAt(js.length - 1) + js.substring(1, js.length - 1) + js[0]);


//10. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation. e.g. of output "My name is Maria. I live in Berlin and I am a teacher". 

let name = 'arturo'
let firstName = 'carlos'
let surname = 'rugh'
val = `My name is ${firstName} but most people call me ${name}, last name ${surname}`

console.log(val);


//11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

val = 'the quick brown fox';
console.log(val[0].toUpperCase() + val.substring(1));
