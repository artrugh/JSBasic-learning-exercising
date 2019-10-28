// Rest params - ... args // represents an indefinite number of args as an array

const thirdArg = (...args) => {

    if (args[2]) {
        return "I have a third argument";
    }

    return "Nein! No third argument";
}

console.log(thirdArg(1, 4, 6)); // "I have a third argument";
console.log(thirdArg(76, 57)); // "Nein! No third argument";

const area = (...args) => {

    if (args.length < 2) return 'No comprendo!';

    if (args[2]) return `${args[0] * args[1] * args[2]}m${args.length}`;

    return `${args[0] * args[1]}m${args.length}`
}
console.log(area(10, 10, 10));
console.log(area(10, 10));
console.log(area(10));