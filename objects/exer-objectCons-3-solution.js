//Q1. javascript-this-output-7
// What will be the output of the following code?

var Animal = function (name, type) {
    this.kind = name,
        this.breed = type
}

var playground = {
    animals: [],

    addAnimal(animal) {
        this.animals.push(animal);
    },

    listAnimalKind(kind) {
        this.animals.forEach(function (Animal) {
            if (Animal.kind === kind) {
                console.log(Animal.breed);
            }
        });
    }
}



// playground.addAnimal(new Animal('dog', 'Labrador'));
// playground.addAnimal(new Animal('dog', 'Goldren Retriever'));
// playground.addAnimal(new Animal('rabbit', 'Angola'));
// playground.listAnimalKind('dog');
// console.log(playground.animals);
// console.log(playground.listAnimalKind('dog'));




// Q2. javascript-this-output-8
// What will be the output of the following code?

var Dream = function (day, mood) {
    this.day = day;
    this.mood = mood;
};

var DreamFactory = {
    dreams: [],

    createDream: function (day, mood) {
        return new Dream(day, mood);
    },

    addDream: function (dream) {
        this.dreams.push(dream);
    },

    listDreams() {
        this.dreams.forEach(function (dream) {
            console.log('You dreamed a ' + dream.mood + ' dream on ' + dream.day);
        });
    }
};

DreamFactory.addDream(DreamFactory.createDream('Sunday', 'dark'));
DreamFactory.addDream(DreamFactory.createDream('Monday', 'funny'));
//console.log(DreamFactory.listDreams());

// You dreamed a dark dream on Sunday
// You dreamed a funny dream on Monday


// Q4. javascript-this&new1
// Look over the below code. Then try to add yourself as a new person object, similar to how myFather and myMother are created.

function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");
var mySelf = new person("John", "Deep", 12, "dark");

// Q6. javascript-this&new4
// Create a constructor function called cars (shown below). Fill in the blank parts in the constructor using this. 
// The cars should have instance "brand","name","year" and "price". Also create 3 different objects using the constructor function, 
// initialzing the instances whatever you want.

function cars(brand, name, year, price) {
    this.brand = brand;
    this.name = name;
    this.year = year;
    this.price = price;
}

var Peugot = new cars("Peugot", "Robert", 1987, 1400)
//console.log(Peugot);

// Q7. javascript-constructors-2
// Create a constructor function called Hero That will accept the arguments name and occupation.
// Use Hero.prototype to add a method whoAreYou that will return: My name is [the hero's name] and I am a [the hero's occupation].
// Use the Hero constructor to create an object hero1 with the name Michaelangello and occupation Ninja.
// Use the whoAreYou method to log to the console hero1's name and occupation.

function hero(name, occupation) {
    this.name = name;
    this.occupation = occupation;
}
var consoling = {
    cons(obj) { console.log(`Hey guys, I am ${obj.name} and what do I do? Yeap, ${obj.occupation}. Tic, tac, false 9.`) }
}


// var Robert = new hero("Robert", "Student");
// consoling.cons(Robert);
//console.log(Robert);

// Q9. javascript-this&new5
// Read over the following code. Then try to add Joffrey, Myrcella and Tomme into the House Lannister 
//(Let's assume Jamie is not the father of these three childen).

function House(symbol) {
    this.symbol = symbol;
    this.lord = undefined;
}
function Person(name) {
    this.name = name;
    this.children = null;
    this.parent = null;
}

Lannister = new House('lion');
Tywin = new Person('Tywin');
Tyrion = new Person('Tyrion');
Cersi = new Person('Cersi');
Jamie = new Person('Jamie');
Joffrey = new Person('Joffrey');
Myrcella = new Person('Myrcella');


Lannister.lord = Tywin;
Lannister.lord = Joffrey;
//console.log(Lannister);

Tywin.children = [Jamie, Cersi, Tyrion];
Jamie.parent = Tywin;
Cersi.parent = Tywin;
Tyrion.parent = Tywin;
//console.log(Lannister);
//console.log(Tywin);
//console.log(Cersi);

let arr = ['cat', 'dog', 'porcupine'];
//While console.logging the array itself will log out the entire array:
console.log(arr); //[ 'cat', 'dog', 'porcupine' ]
//Using the spread operator will log out each value individually:
console.log(typeof arr); //cat dog porcupine