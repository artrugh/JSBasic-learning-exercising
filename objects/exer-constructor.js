// 1

// Create an object about a person that lives in your country for some years (unknown how many, you define it) and holds the information below.

// Firstname, lastname, age, years of residence in your country, his own nationality, current profession and current salary. 

// Then create a method that changes it's nationality to your country's nationality if the years of residence is greater or equal to 7.e:


const Pablo = {
    firstName: "Pablo",
    lsstName: "Gomez",
    age: 21,
    yearResidence: 10,
    nationality: "Italian",
    profession: "arquitect",
    salary: 5000,
    changeNationality: function (nationality) {
        if (this.yearResidence > 7) { this.nationality = nationality }
    }
}

// Pablo.changeNationality("German")

// console.log(Pablo.nationality);

// 2

// Create three objects for three people with the following info. Firstname,
// lastname, bank account (a number in us dollars) and country of residence. 

// The bank account is going to be a number that the person has to his/her bank account in US dollars. 

// Add a new property that corresponds to how much 1$ to the currency of every person's country corresponds.

// The persons are coming from Greece, Switzerland and Australia respectively. 

// Create a function that creates a new property for each person that shows the bank account in his country's money.

const Paul = {
    firstName: "Paul",
    lastName: "Muller",
    bankAccount: 8000,
    residence: "Greece",
    nationalCurrency: function () {
        return this.bankAccount * 0.88
    }
}

// console.log(Paul.nationalCurrency());


const John = {
    firstName: "John",
    lastName: "Tohmas",
    bankAccount: 4000,
    residence: "Switzerland",
    nationalCurrency: function () {
        return this.bankAccount * 0.98
    }
}

// console.log(John.nationalCurrency());

const Stefan = {
    firstName: "Stefan",
    lastName: "Lovasky",
    bankAccount: 10000,
    residence: "Australia",
    nationalCurrency: function () {
        return this.bankAccount * 1.43
    }
}

// console.log(Stefan.nationalCurrency());


// 3

// We will try to build our class inheritance in order to create instances of Tigers.

// As you may know there are two species of Tigers, the Siberian Tigers and the Bengal Tigers. That means every Tiger is unique, but also inherits characteristics from it's own species. 

// Let's see how we could build this structure step by step.

// At the beginning define a class named AllSpecies. This is the parent class and doesn't inherit from anyone. 

//Define a constructor that is going to be used from all sub-classes that extend AllSpecies.

//  In the AllSpecies constructor define 4 arguments. species, numOfEyes, numOfLegs, and hasTail. 

//These indicate the species of the class that inherits from AllSpecies,

// how many eyes this species has, how many legs, and if this species has tail or not.

// Then it's time to create the Tiger class that extends from AllSpecies and uses inside it's 

//constructor the super with these values. super('Tiger', 2, 4, true). 

// The class Tiger inside it's own constructor also bequeaths some properties to all the sub-classes that will extend from Tiger class.

// These properties namely are: colorFur, eyeColor, region, eatMeet. 

//The first three are going to be strings, the last is boolean as always.

// Once this is done create the BengalTiger class that extends Tiger class with the following values

//('Orange-black', 'brown', 'India', true). That means that the colorFur is 'orange-black', the eye color is 'brown' etc.

//class SiberianTiger extends Tiger('Black-white', 'blue', 'Siberia', false) { }

// Create the SiberianTiger with the exact same way but use as values the following ('Black-white', 'blue', 'Siberia', false).

//Yes they are veggan! (at least for our example!). 

// Both Siberian and Bengal Tiger classes expose some properties to every unique tiger that will be created from them. 

// These are the following: name, age, height, length and gender

// The last step is to instantiate two actual objects, one from each Tiger sub-class.

// For example:

// Create a unique bengal tiger with these properties ('Richard Parker', 15, 82, 226, 'male');

// Create a siberian tiger with these properties ('The Nights King', 990, 88, 204, 'White Walker');

// Console.log both tigers after you have stored them into their own variables and see if you can see all the properties they belong to them, 
// plus the ones they inherited from the classes above!

// Extra Bonus: Create a function that prints the colorFur. This should be a method that every tiger should have regardless of type!
// You may want to take a look here first on how to do this.

// Anytime you want to visualize the task, take a look at the top of the screen. 

class AllSpecies {

    constructor(species, numOfEyes, numOfLegs, hasTail) {

        this.species = species;
        this.numOfEyes = numOfEyes;
        this.numOfLegs = numOfLegs;
        this.hasTail = hasTail;

    }
}

class Tiger extends AllSpecies {

    constructor(colorFur, eyeColor, region, eatMeet) {
        super('Tiger', 2, 4, true);
        this.colorFur = colorFur;
        this.eyeColor = eyeColor;
        this.region = region;
        this.eatMeet = eatMeet;

    }
}


class BengalTiger extends Tiger {

    constructor(name, age, height, length, gender) {
        super('orange-black', 'brown', 'India', true);
        this.name = name;
        this.age = age;
        this.height = height;
        this.length = length;
        this.gender = gender;
    }
}

class SiberianTiger extends Tiger {

    constructor(name, age, height, length, gender) {
        super('Black-white', 'blue', 'Siberia', false);
        this.name = name;
        this.age = age;
        this.height = height;
        this.length = length;
        this.gender = gender;
    }
}

const bengalTiger = new BengalTiger('Richard Parker', 15, 82, 226, 'male');
const siberianTiger = new SiberianTiger('The Nights King', 990, 88, 204, 'White Walker');

// for (i in siberianTiger) {
//     console.log(i);

// }


//console.log(bengalTiger, siberianTiger);



// ======================

// 4

// Create 5 users that share the basic info like:

// firstname, lastname, htmlSkills, cssSkills, and jsSkills. So in total 5 arguments, inside the constructor use 3 properties. 

// this.firstName = firstName;

// this.lastName = lastName;

// this.skills = {html: htmlSkills, css: cssSkills, jsSkills};

// Create a method that calculates the average of these 3 skills and returns the average. 

//Find a way with what you have learned to loop through the skills property object and calculate average.

// Don't create a function for every object if it's possible. Use inheritance to do it in all in one fashion.


// class Developer {

//     constructor(firstName, lastName, htmlSkills, cssSkills, jsSkills) {

//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.skills = {
//             html: htmlSkills,
//             css: cssSkills,
//             js: jsSkills
//         }

//         this.averageDeveloping = function () {
//             const average = ((this.skills.html + this.skills.css + this.skills.js) / (Object.keys(this.skills).length)).toFixed(2);
//             return average;

//         }
//     }
// }



class Developer {

    constructor(firstName, lastName, htmlSkills, cssSkills, jsSkills) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.skills = {
            html: htmlSkills,
            css: cssSkills,
            js: jsSkills
        }

        this.averageDeveloping = function () {

            let result = 0;
            for (let i in this.skills) {
                result += this.skills[i];
            }

            return (result / (Object.keys(this.skills).length)).toFixed(2)

        }
    }
}



const Peter = new Developer("Peter", "Parker", 53, 34, 53);
//console.log(Peter.skills[2]);

//console.log(Peter.averageDeveloping());

//5

// Create 5 objects that contain information about a specific movie each.

// Every object should contain the title of the movie as a property, 

// the director's name, the year released, the starring actor, and if you have seen the movie or not.

// Put these objects into a bigger object and nest them inside it.

// Find a way by creating a function to print to the console only the names of the movies you have seen.




class Movie {
    constructor(title, director, year, starring, seen) {

        this.title = title;
        this.director = director;
        this.year = year;
        this.starring = starring;
        this.seen = seen;

    }
}


const cinemaParadiso = new Movie("Cinema Paradiso", "Giuseppe Tornatore", 1988, "Perrin, Noiret", true);
const alien = new Movie("Allien", "Someone", 1979, "Perrin, Noiret", false);

const allMovies = {
    cinemaParadiso, alien,
}


const findSeenMovies = function (movieCollection) {

    for (movie in movieCollection) {
        if (movieCollection[movie].seen) {
            //console.log(movieCollection[movie].title);
        }
    }
}

findSeenMovies(allMovies);



//console.log(cinemaParadiso.seenMovies());
//console.log(cinemaParadiso);


// 6

// Suppose you are a manager in a shop that sells clothes (like Karstadt or H&M etc). 

// The day begins, and the total balance is empty. 

// Your shop sells 3 kinds of goods.

//    t-shirts for 10$ each.

//    jeans for 30$ each.

//    jackets for 150$ each.

// The shop has in stock 100 t-shirts, 100 jeans and 100 jackets. The total balance of the shop is 0.

// These are properties that belong to your shop object and are shared across all employees.


// The shop has 3 different cashiers so we can serve 3 clients maximum at the same time.

// Create an object for every cashier and save inside:

//    the id of the cashier (from 1 to 3)

//    the fullname of the employee that works in the cashier now.

//    the number of customers this cashier has served. That is different for every cashier and begins with 0.

//    the balance of every cashier at any moment (begins empty).

// These properties belong to every employee (every cashier) separately.


// Create a function that deals with any new buy from a customer the following way:

//  Accepts what the customer has bought and how much of it does he want.

// If the quantity of the specified good the customer wants to buy is ok and does not surpass 
// the limit of our stock for this material, 
//then we calculate the fee the customer needs to pay and
// we update first the cashier's balance and the total balance of the shop as well.
// In the end we increase the cashier's number of customers that have been served by 1.  


// Else if some material is not enough because we havn't so many pieces left, 
// then cancel the order by consoling log a descriptive message to the console.
//In this case of course we don't update any other value.

// Ex.// cashier1.createSale(2, 2, 1) checks if the shop has 2 t-shirts left in stock, 2 jeans left and 1 jacket left. 

// If some of these things is missing, we cancel the order. If not and all is fine, we update our stock (from 100 to 98 t-shirts etc),

// we add the cost of the order to cashier1 who made the sale, and of course we update the total balance of the shop 

// with the cost of the order!


// Additionally as bonus,  create another function that is for refunding in case the customer
// is not happy with the material he bought and he wants to give it back and take his money back.
// In such a case it should be clear what he returns back, so we can update the stock and
// how much of this material is left, and of course update the cashier's balance and the shop's balance in general 
// (the whole calculation result should be deducted from both balances). 

// Don't forget to decrease the number of customers that have been served from this cashier.



// Be careful! Some of the properties that are getting changed are shared through all cashiers

// (like the total shop balance, or how much of a specific material is left) 

// while others are different for every cashier separately (for every employee).

// You may want to think this first before you start implementing your architecture. 

class Shop {
    constructor(totalBalance) {
        this.totalBalance = totalBalance;
        this.prices = { jacket: 150, jeans: 30, tShirt: 10 };
        this.stock = { jacket: 100, jeans: 100, tShirt: 100 }
    }
}

class Cashier extends Shop {

    constructor(id, fullName) {
        super(0);
        this.id = id;
        this.fullName = fullName;
        this.counterCustomer = 0;
        this.balance = 0;
    }

    newSale(product, quantity) {

        if (product.length === quantity.length) {

            let internalCounter = 0;

            for (let idx in product) {
                console.log("INDEX", idx);

                if (KML.stock[product[idx]] - quantity[idx] > 0) {
                    let fee = KML.prices[product[idx]] * quantity[idx];
                    internalCounter += 1;
                    this.balance += fee;
                    KML.stock[product[idx]] -= quantity[idx];
                    console.log(product[idx], KML.prices[product[idx]], 'this is', KML.stock[product[idx]], quantity[idx]);
                    console.log(`A new sale has been operated by ${this.fullName} in cashier ${this.id}.
                 The fee is ${fee} and ${quantity[idx]} ${product[idx]} has been sold.`);

                } else { console.log(`Not more ${product[idx]} stock, the operation has been canceled.`); }

            }

            if (internalCounter > 0) { this.counterCustomer += 1; KML.totalBalance += this.balance; }



        } else {
            throw new Error("quantity not defined")
        }

    }

    Refunding(product, quantity) {

        if (product.length === quantity.length) {
            let internalCounter = 0;
            for (let idx in product) {
                console.log("INDEX", idx);
                let fee = KML.prices[product[idx]] * quantity[idx];
                this.balance -= fee;
                KML.stock[product[idx]] += quantity[idx];
                internalCounter += 1;
                console.log(`A refunding has been operated by ${this.fullName} in cashier ${this.id}.
            The fee refunded is ${fee} and ${quantity[idx]} ${product[idx]} has been refunding`);

            }

            if (internalCounter > 0) { this.counterCustomer -= 1; KML.totalBalance + this.balance; }
        }

        else {

            throw new Error("quantity not defined")
        }



    }
}


const KML = new Shop(0);
const employee1 = new Cashier(1, "John Cage");
const employee2 = new Cashier(2, "Jimmy Page");
const employee3 = new Cashier(3, "Jonny Tage");

employee1.newSale(["tShirt", "jeans"], [10, 2]);
employee1.Refunding(["jeans"], [3])
employee1.newSale(["tShirt", "jeans"], [10, 2]);
console.log(employee1);
console.log(employee1);
console.log(KML);

//console.log(KML)


