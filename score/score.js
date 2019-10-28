function one() {

    debugger;
    console.log('one');
    two();
    five = () => console.log('five');
    five()
}

function two() {
    debugger;
    console.log('two');
    three();
}

function three() {
    debugger;
    console.log('three')
    four();
}

function four() {
    debugger;
    console.log('four')
}

//one() // the function are in the global scores.
three() // that why they can be applied.

//five() //five is not in the global score that why it can not be written before the function which nests it.