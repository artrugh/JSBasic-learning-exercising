let x = 0;

switch (x) {
    case 0:
        state = 'OFF'
        break;
    case 1:
        state = 1
        break;
    default:
        state = 'Stateless'
        break;
}

console.log(state);

console.log(typeof state);

let name = 'David';
console.log(name);


switch (name) {
    case 'Jon':
        name = `The name is ${name}`
        break;
    case 'Mark':
        name = `The name is ${name}`
        break;
    case 'David':
        name = `The name is ${name}`
        break;
    case 'Harry':
        name = `The name is ${name}`
        break;
    default:
        name = `The name is John Doe!`
        break;
}

console.log(name);
