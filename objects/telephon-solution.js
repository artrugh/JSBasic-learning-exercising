// Telephone country ProblemGiven that you have this data structure:

// Write an arrow function that accepts a string (a country code from thearray above) 
// and returns the country itself.Bonus: Try to accomplish this result without using any 
// if statements, switch cases or ternary operators. You can use of course loops and any known array function.

// Maybe you will find the 'find' array method documentation below very useful in order to achieve this.
// In a nutshell the Array's find method accepts a function (like map, forEach, filter or reduce)
// and loops through each element until it findsthe first match given the specified condition
// inside the testing function. If it finds it returns the element itself,
// otherwise returns undefined. Find more about this method by clicking the link below.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

let telephoneData = [

    { countryCode: '0030', country: 'Greece' },
    { countryCode: '0039', country: 'Italy' },
    { countryCode: '00972', country: 'Israel' },
    { countryCode: '0007', country: 'Russia' },
    { countryCode: '0044', country: 'United Kingdom' },
    { countryCode: '0001', country: 'United States' },
    { countryCode: '00963', country: 'Syria' },
    { countryCode: '0029', country: 'Belgium' },
    { countryCode: '0031', country: 'Holland' },
    { countryCode: '0049', country: 'Germany' }

]





const findCountry = code => telephoneData.find(obj => obj.countryCode === code).country

// checkCode = i => i.countryCode === code
// return telephoneData.find(checkCode).country



console.log(findCountry('0031'));

