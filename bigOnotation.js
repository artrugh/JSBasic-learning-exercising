function funcl(x) {
    let total = 0;
    for (let i = 0; i < x; i += 1) {
        total += 1;
    }
    return total
};

console.time("test");
funcl(100000);
console.timeEnd("test");

//BIG O NOTATION
// is a way of measuring how fast a function or algorithm executes relatives to how many items you give 
// it as an input

// = time complexity
// = space complexity

// 1. 0(1) = constant runtime - takes same amount of time regardless of input size 
// 2. 0(n) = linear runtime - scales one to one with the size of the input
// 3. 0(nˆ2) = exponentialruntime - grows expnentially with size of input