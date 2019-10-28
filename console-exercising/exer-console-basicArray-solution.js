// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. 
// ["Paris", "London","Valletta", "Prague", "Rome"]. 

let euro = ['Paris', 'London', 'Valletta', 'Prague', 'Rome'];

//Declare another variable and assign the second item of the array as a value.

let city = euro.slice(1, 2);
console.log(city);



// 2. Change the first item in the array to "Berlin"

console.log(euro[0] = 'Berlin');
console.log(euro);


// 3. Print the length of the array "euroCities"

console.log(euro.length);

//4. Remove the last item of the array "euroCities"

console.log(euro.pop());
console.log(euro);


//5. Use an array method to add "Budapest" to the euroCities array.

console.log(euro.push('Budapest')); //4
console.log(euro);

//6. Use an array method to select item 3 from the array of euroCities and store this in another variable

let vallet = euro.slice(2, 3); // slice out a piece of an array in a new array, but not delete nothing
console.log(vallet);

// 7. Replace the 3rd item in the array of euroCities with "Athens"

console.log(euro.splice(2, 1, "Athens"));
console.log(euro);

// 8. 10. Reverse the order of euroCities

console.log(euro.reverse());


