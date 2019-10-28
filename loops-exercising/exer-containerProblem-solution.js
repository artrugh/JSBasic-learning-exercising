// The Container Problem
// Suppose you own a ship.
// This ship can carry up to 10.000 Kg in terms of weight.
// A merchant wants you to carry his goods with your ship.
// He has 500 containers and he wants you to carry as many as
// possible. All containers have an identifying number from 1
// to 500.
// The first 100 containers weight 10Kg each.  1000kg
// The containers with number from 101 up to 200 (included) 2000kg
// weight 20kg each.
// The containers with number from 201 up to 250 (included) 2500kg
// weight 50kg each.
// The containers with number from 251 up to 300 (included) 5000kg
// weight 100kg each.
// The containers with number from 301 up to 400 (included)
// weight 200kg each.
// The rest weight 500 Kg each.
// Put as many containers as possible without sinking your
// ship. Find a way to stop adding weight if you surpass the
// limit your ship can afford.
// Print to the console exact how many containers you have
// included to your ship and how much is the difference
// between the total weight of the containers and the weight
// your ship can afford (free available weight).


// let counter = 0 //[10, 20, 50, 100, 200, 500]

// only and example

// let foo = 1

// while (foo <= 10) {
//     foo++;
//     if (foo = 5) {
//         break;
//     }
//     console.log(foo);
// }

// console.log(foo);

//My approach

const maxWeight = 10000;
let weight = 0;
let numContainers = 1;
let weightContainer = 10;

while (maxWeight >= weight + weightContainer) {

    if (numContainers <= 100) {
        weight += 10;
        numContainers === 100 ? weightContainer = 20 : weightContainer = 10;

    }

    else if (numContainers <= 200) {
        weight += 20;
        numContainers === 200 ? weightContainer = 50 : weightContainer = 20;

    }
    else if (numContainers <= 250) {
        weight += 50;
        numContainers === 250 ? weightContainer = 100 : weightContainer = 50;

    }

    else if (numContainers <= 300) {
        weight += 100;
        numContainers === 300 ? weightContainer = 200 : weightContainer = 100;

    }

    else if (numContainers <= 400) {
        weight += 200;
        numContainers === 400 ? weightContainer = 500 : weightContainer = 200;

    }

    else {
        weight += 500;
        weightContainer = 500;

    }

    numContainers++;

}

console.log(`The number of container is ${numContainers - 1}, the weight of the ship is ${weight}kg and the available weight is ${maxWeight - weight}kg.`);


// Teacher approach

// let maxWeight = 10000;
let weightIncluded = 0;
let id = 1;
let weightNextContainer = 10;



while (maxWeight >= weightIncluded + weightNextContainer) {

    if (id <= 100) {
        weightIncluded += 10;
        id === 100 ? weightNextContainer = 20 : weightNextContainer = 10
    } else if (id <= 200) {
        weightIncluded += 20;
        id === 200 ? weightNextContainer = 50 : weightNextContainer = 20
    } else if (id <= 250) {
        weightIncluded += 50;
        id === 250 ? weightNextContainer = 100 : weightNextContainer = 50
    } else if (id <= 300) {
        weightIncluded += 100;
        id === 300 ? weightNextContainer = 200 : weightNextContainer = 100
    } else if (id <= 400) {
        weightIncluded += 200;
        id === 400 ? weightNextContainer = 500 : weightNextContainer = 200;
    } else {
        weightIncluded += 500;
        weightNextContainer = 500;
    }
    //in case you want to see every step!
    // console.log(`${id} container included, the current Weight is ${weightIncluded}. Remain weight is ${maxWeight - weightIncluded}!`)

    id++;
}

console.log(`I have included ${id - 1} containers to the ship and the weight remained is ${maxWeight - weightIncluded}kg, and the weight of the ship is ${weightIncluded}kg!`);


// Joseph approach


let counter = 1;

while (counter < 500) {

    if (counter <= 100 && weight < maxWeight) {
        weight += 10;
        numContainers++;
    }
    else if (counter <= 200 && weight < maxWeight) {
        weight += 20;
        numContainers++;
    }

    else if (counter <= 250 && weight < maxWeight) {
        weight += 50;
        numContainers++;
    }

    else if (counter <= 300 && weight < maxWeight) {
        weight += 100;
        numContainers++;
    }
    else if (counter <= 400 && weight < maxWeight) {
        weight += 200;
        numContainers++;
    }

    else if (counter <= 500 && weight < maxWeight) {
        weight += 500;
        numContainers++;
    }

    counter++;

}

console.log(`The number of container is ${numContainers - 1}, the weight of the ship is ${weight} Kg, weight available: ${maxWeight - weight}kg.`);


// Tom approach

let weights, numbers, totalWeight, i;

weights = [10, 20, 50, 100, 200, 500];
numbers = [100, 100, 50, 50, 100, 100];
totalWeight = 0;
// maxWeight = 10000;
totalContainers = 0;
i = 0;

while (totalWeight < maxWeight) {
    totalWeight += weights[i] * numbers[i];
    totalContainers += numbers[i];
    console.log(i, totalWeight, " = ", weights[i], "*", numbers[i]);
    i++;
}
while (totalWeight > maxWeight) {
    totalWeight -= weights[i - 1];
    totalContainers -= 1;
}

console.log(`The ${totalContainers} containers in the ship weight ${totalWeight} kg, 
which is ${maxWeight - totalWeight} kg less than the maximum weight.`);


