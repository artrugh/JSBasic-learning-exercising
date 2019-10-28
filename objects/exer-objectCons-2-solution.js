//1. Hero
// Create a constructor function called Hero That will accept a variable name as an argument.
// Use the Hero constructor to create an object myHero with the name 'Link'.

class Hero {
    constructor(name) {
        this.name = name
    }
}

const Link = new Hero("Link")
// console.log(Link);

// 2. Playlist
// Create a constructor function called Song. Song should take in two arguments, title and artist,
//which should both be added as properties when the Song constructor function is used. 
// The Song function should also have a method called play on its prototype.
// When called, the play function should console.log the name of that specific song preceded by the word 'Playing:'.

// For example:

// let song1 = new Song('Time', 'Pink Floyd');
// let song2 = new Song('Sweet Life', 'Frank Ocean');
// let song3 = new Song('Intro', 'M83');
// let song4 = new Song('Bloom', 'ODESZA');
// let song5 = new Song('The Less I Know The Better', 'Tame Impala');

// song4.play(); //logs 'Playing: Bloom'
// song2.play(); //logs 'Playing: Sweet Life'
// song3.play(); //logs 'Playing: Intro'

class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist
    }

    play() {
        console.log(`Playing: ${this.title}`);
    }
}

const Angie = new Song("Angie", "Rolling Stones")
//Angie.play();
//console.log(Angie);


// 3. Person
// Create a constructor function called Person That will accept the arguments name and occupation.
// Use Person.prototype to add a method whoAreYou that will return: My name is [the person's name] and I am a [the person's occupation].
// Use the person constructor to create an object person1 with the name Michaelangello and occupation Ninja.
// Use the whoAreYou method to log to the console person1's name and occupation.

class Person {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }
    whoAreYou() {
        console.log(
            `My name is ${this.name} and I am a ${this.occupation}`);
    }
}

const John = new Person("John", "soldier");
//John.whoAreYou();

// 4.
// Create a constructor function called arrayString that will take an array as an argument.
//This constructor will join the array to a single string, and store the string in a variable called str.
//For example, the following code:

// let joined = new arrayString(['c','a','t']);
// console.log(joined);
// // will log to the console:
// { str: 'cat' }

class arrayString {
    constructor(arr) {
        this.str = arr.join("")
    }

}

const array = new arrayString(['c', 'a', 't']);
//console.log(array);

// 5. Calendar App
// As part of a calendar app, you will need to create an object that, for any given month, will store all the days in that month.

// Create a constructor called Day(year, month, day) that will be given a number each for the month, the day and the year.
// Create a function called getDaysinMonth(year, month) that will be given a number each for the month and the year. 
//This function will return array of Day objects, which will be equal in length to the number of days in the given month. For example:
// let daysInJune2016 = getDaysinMonth(2016, 6);
// console.log(daysInJune2016)
// will log to the console:

// [ { month: 6, day: 1, year: 2016 },
//   { month: 6, day: 2, year: 2016 },
//   { month: 6, day: 3, year: 2016 },
//   // ...
//   // ...
//   // ...
//   { month: 6, day: 28, year: 2016 },
//   { month: 6, day: 29, year: 2016 },
//   { month: 6, day: 30, year: 2016 } ]
// hint: create a new Date object and use the getDate method to get the number of days in a given month.

class Days {

    constructor(month, year) {
        this.month = month;
        this.day = 0;
        this.year = year;
    }

    getDays(Days) {

        if (this.month === 1 || this.month === 3 || this.month === 5 || this.month === 7 || this.month === 8 || this.month === 10 || this.month === 12) {
            for (let i = 1; i < 32; i++) {
                this.day = i;
                console.log(Days);
            }
        }

        else if (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) {
            for (let i = 1; i < 31; i++) {
                this.day = i;
                console.log(Days);
            }
        }

        else {

            for (let i = 1; i < 30; i++) {
                this.day = i;
                console.log(Days);
            }
        }
    }
}

const January = new Days(1, 2019);



// getDays = obj => {

//     if (obj.month === 1 || obj.month === 3 || obj.month === 5 || obj.month === 7 || obj.month === 8 || obj.month === 10 || obj.month === 12) {
//         for (let i = 1; i < 32; i++) {
//             obj.day = i;
//             console.log(obj);
//         }
//     }

//     if (obj.month === 4 || obj.month === 6 || obj.month === 9 || obj.month === 11) {
//         for (let i = 1; i < 31; i++) {
//             obj.day = i;
//             console.log(obj);
//         }
//     }

//     else {
//         for (let i = 1; i < 30; i++) {
//             obj.day = i;
//             console.log(obj);
//         }
//     }
// }

// const January = getDays({ month: 1, day: 0, year: 2016 });
// const September = getDays({ month: 9, day: 0, year: 2016 })

// console.log(January);
// console.log(September);


