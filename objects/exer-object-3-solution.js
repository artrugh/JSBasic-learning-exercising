//Q1. javascript-this-output-1
// What will be the output of the following code?

var bunny = {
    lovesCarrots: true,
    f: function () {
        return this.lovesCarrots;
    }
}

//console.log(bunny.f()) //true


// Q2. javascript-this-output-3
// What will be the output of the following code?

var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    getName: function () {
        return this.firstName + " " + this.lastName;
    }
}

//console.log(person.getName()) //Penelope Barrymore

// Q3. javascript-this&new2
// Read the code below, what is the output of the console.log? Why?

var o = {
    prop: 37,
    f: function () {
        return this.prop;
    }
};
//console.log(o.f()); //37


// Q4. javascript-this-output-4
// What will be the output of the following code?

var golfGames = {
    tournament: "The Masters",
    players:
        [
            { name: "T. Woods", age: 37 },
            { name: "P. Mickelson", age: 43 }
        ],
    showAllGames: function () {
        currObject = this;
        this.players.forEach(function (player) {
            console.log(player.name + ' is playing at ' + currObject.tournament);
        })
    }
}

//golfGames.showAllGames(); // T. Wood is playing at The Master


// Q5. javascript-this-output-5
// What will be the output of the following code?

var player1 = {
    firstName: "Jack",
    lastName: "Black",
    getName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var player2 = {
    firstName: "Bunny",
    lastName: "Rabbit",
    getName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var game = {
    players: [],

    listPlayers: function () {
        this.players.forEach(function (player) {
            console.log(player.getName());
        });
    }
}

game.players.push(player1, player2); // [{fn: Bunny}{fn: Jack}]
//game.listPlayers(); //"Bunny Rabbit" "Jack x"

// Q6. javascript-this-output-6
// What will be the output of the following code?


// let document = { body: { style: { color: setBodyTextColor() } } }

// function setBodyTextColor(color) {
//     this.body.style.color = color;
// }

// //document.setBodyTextColor = setBodyTextColor;
// setBodyTextColor("green");
// //document.setBodyTextColor("blue");

// function getBodyTextColor() {
//     return this.body.style.color;
// }

// //document.getBodyTextColor = getBodyTextColor;
// console.log(document.getBodyTextColor());





// Q7. javascript-this-output-9
// What will be the output of the following code?

var Counter = {
    count: 0,
    add: function () {
        this.count++;
    }
}

Counter.add(); //1
// console.log(Counter.count);//1
var addToCount = Counter.add; //1

// console.log(Counter.count); //1

// Q8.javascript - this - output - 10
// What will be the output of the following code ?



var AnotherCounter = {};
AnotherCounter.count = Counter.count;
AnotherCounter.add = Counter.add;
AnotherCounter.add();

// console.log(AnotherCounter.count); //2
// console.log(Counter.count) //1

var YetAnotherCounter = Counter;
Counter.add(); //2
//console.log(YetAnotherCounter.count)  //2

