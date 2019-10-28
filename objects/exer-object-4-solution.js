// Q1. iObject
// Create an object that has some information about yourself,
// including your name, hometown, favorite food, and favorite musical artist.
// Feel free to add any other properties you'd like.

// var nate = {name: 'Nate', 
//            hometown: 'Montclair, NJ', 
//            favorite_food: 'Chocolate ice cream', 
//            favorite_artist: 'Jimi Hendrix'}

// class Person {
//     constructor(name, hometown, favoriteFood, favoriteArtist) {
//         this.name = name;
//         this.hometown = hometown;
//         this.favorite_food = favoriteFood;
//         this.favorite_artist = favoriteArtist;
//     }
// }

// const Juan = new Person("Juan", "Para", "Kebab", "Tony");
//console.log(Juan);

// Q2. create-object
// Create an object called company. The company object should contain the following properties:
// name, year founded, CEO. The CEO should be an object that contains two propertes: 
//name and age. Choose a real company (other than Apple) and add its details.

class Worker {
    constructor(company, founded, name, age) {
        this.name = company;
        this.founded = founded;
        this.ceo = { name, age }
    }

}

const John = new Worker("Apple", 1976, "Tim Cook", 55);
//console.log(John);



// Example:

// { name: 'Apple', founded: 1976, ceo: { name: 'Tim Cook', age: 55 } }


// Q3. get-object-name
// Write a function named getObjName that takes in an object as an argument. 
//The function return the value of the name property of the object.

// Examples:
// getObjName({name: 'Jimi', insrument: 'guitar'});  // returns 'Jimi'
// getObjName({name: 'Snorlax', type: 'normal'});  // returns 'Snorlax'

class Person {
    constructor(name, hometown, favoriteFood, favoriteArtist) {
        this.name = name;
        this.hometown = hometown;
        this.favorite_food = favoriteFood;
        this.favorite_artist = favoriteArtist;
    }
}

const Juan = new Person("Juan", "Para", "Kebab", "Tony");
getObjName = (obj) => obj.name;
//console.log(getObjName(Juan));


// Q4. favorite-movies
// Create an array of 3-5 objects, where each object describes one of your 
// favorite movies and has properties for the title, genre, and year_released.
class Movies {
    constructor(title, genre, year) {
        this.title = title;
        this.genre = genre;
        this.year = year;
    }
}
const Pepe = new Movies("Pepe", "fiction", 1978)
const Lala = new Movies("Lala", "thriller", 1999)

const MovieCollection = {
    movies: []
}

addMovie = movie => MovieCollection.movies.push(movie);
addMovie(Pepe)
addMovie(Lala)
//console.log(MovieCollection);


// Q5. javascript-simple-objects-2
// Create two objects:

// An object called whiteRabbit, containing as property a variable named type. Make this variable equal to white.
// An object called fatRabbit, also containing as property a variable named type. Make this variable equal to fat.
// Write a function called whatKindOfRabbit which accepts as an argument an object called rabbit. 
//Make the function log to the console the type property of the object, like this:

class Rabbit {
    constructor(name, type) {
        this.name = name;
        this.type = type
    }
}

const whiteRabbit = new Rabbit("whiteRabbit", "white")
const fatRabbit = new Rabbit("fatRabbit", "fat")

//whatKind = Rabbit => console.log(`This is a ${Rabbit.type} rabbit.`);
//whatKind(whiteRabbit)


// This is a ______ rabbit

// Q6. javascript-simple-objects-3
// Create two objects:

// An object called cat. This object will contain the properties kind ("cat") and age (2);
// An object called mouse. This object will contain the properties kind ("mouse") and age (20);
// Write a function called whoIsWiser 
//that accepts two objects as arguments: firstAnimal and secondAnimal. 
//Have the function compare the age property of the two objects. If the age is equal, it will print out
// These two are equal in wisdom.
// If the age is not equal, it will print out:

// The [older animal] is wiser than the [younger animal]
// Call the function with the following variables:

class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

const cat = new animal("cat", 3)
//const mouse = new animal("mouse", 3)

compareAges = (animal1, animal2) =>
    animal1.age === animal2.age ? "These two are equal in wisdom" :
        animal1.age > animal2.age ? `The ${animal1.name} is wiser than ${animal2.name}.` :
            `The ${animal2.name} is wiser than ${animal1.name}.`

    ;
//console.log(compareAges(cat, mouse));


// mouse, cat.
// cat, mouse.
// cat, cat.
// mouse, mouse.


// Q7. javascript-simple-objects-4
// You are given the following code:

var mouse = {
    name: "French Mouse",
    words: ["Would YOU like cats if you were me?",
        "As if I would talk on such a subject!!",
        "Nothing. The mouse is leaving."]
}

//console.log(mouse.words[0]);


var girl = {
    name: "Alice",
    words: ["Oh, I beg your pardon! I quite forgot you didn't like cats. ",
        "Well, perhaps not. We won't talk about cats any more if you'd rather not.",
        "I won't indeed! Are you--are you fond--of--of dogs?"]
}

dialogue = (speaker1, speaker2) => {
    if (speaker1.words.length >= speaker2.words.length) {
        for (i = 0; i < speaker1.words.length; i += 1) {
            console.log(`${speaker1.name} says ${speaker1.words[i]}`);
            console.log(`${speaker2.name} says ${speaker2.words[i]}`);
        }

    }

    else {
        for (i = 0; i < speaker2.words.length; i += 1) {
            console.log(`${speaker1.name} says ${speaker1.words[i]}`);
            console.log(`${speaker2.name} says ${speaker2.words[i]}`);
        }

    }

}

//dialogue(mouse, girl)

// write a function called dialogue that would accepts as arguments two objects,
// speaker1 and speaker2. Inside the function, log to the console words arrays of both speakers as follows:

// [ speaker 1's name ] + " says " + [ speaker1's words[0] ]
// [ speaker 2's name ] + " says " + [ speaker2's words[0] ]
// [ speaker 1's name ] + " says " + [ speaker1's words[1] ]
// [ speaker 2's name ] + " says " + [ speaker2's words[1] ]
// ...
// Assume that both words arrays are of the same length.
// However, you do not know the length of these arrays in advance.



// Q8. javascript-simple-objects-1
// Create an empty object called rabbit. 
//Add a function called speak as a property to your object. This function will accept a 
//single argument and log to the console "The rabbit says: " followed by the argument.
// Call the function with the string "Can I have some lettuce?".

// The output should look like this:

// The rabbit says: Can I have some lettuce?

// Q9. obj-length
// Write a function called objSize that takes this object 
//as its input and return the object's size (number of properties in the object) as its output.

// Example:

var student = {
    name: "Tony Stark",
    university: "MIT",
    Major: "Physics",
    age: 40
};

//console.log(Object.keys(student).length);


// objSize(student); //returns 4


// Q10. javascript-simple-objects-5
// You are helping create a simple text-based role playing game. The Following code is given:



class Player {
    constructor(name) {
        this.name = name;
        this.attack = 0
    }
}

class Monster {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
}

class Attack {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}

const Peter = new Player("Peter");
const Robert = new Player("Robert");
const Picolo = new Monster("Picolo", 100)
const Bulba = new Monster("Bulba", 150)
const hameha = new Attack("hameha", 20)
const henkidama = new Attack("henkidama", 40)

fight = (player, monster, attack) => {
    debugger;
    player.attack += 1;
    monster.hp -= attack.damage;

    console.log(`${player.name} hit ${monster.name}.`);
    console.log(`${player.name} attacked ${player.attack}.`);

    if (monster.hp < 1) {
        console.log(`${monster.name} is dead`);
    } else { console.log(`${monster.name} has ${monster.hp}.`) }

}

isDead = monster => console.log(monster.hp < 1);



fight(Peter, Picolo, hameha)

isDead(Picolo)



//       t
//       // If damage would bring hp to less then zero, setting hp to zero
//       this.hp = (this.hp - damage >= 0) ? (this.hp - damage) : (0);
//       // Printing out how much hp the monster has left
//       console.log(this.name + " has " + this.hp + " hp");
//   },

//   Call this function to check if the monster is dead
//   isDead: function(){
//       return this.hp === 0;
//   }
// }



//     *    Call this function when the monster gets hit. It will log the monster's remaining hp to the console
//     *    @arg damage - the number to be substracted from the monster's hp
//     */






// Write a new function fight(player, monster)

// In this function, the player will hit the monster until it is dead. Before each hit, log to the console:

// [The player's name] hit [the monster's name]
// When the monster is dead, log to the console:

// [The monster's name] has been defeated
// Use the given functions of monster1.


