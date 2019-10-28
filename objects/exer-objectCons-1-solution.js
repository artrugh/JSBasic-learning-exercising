// Classes
// 1. Person Class
// Create a class called Person which accepts the name of a person as a string, and his/her age as a number. 
//The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.GetNameAge = function () {
            return `${name}, ${age} years old.`
        }
    }
}

const john = new Person("John", 54)
//console.log(john.GetNameAge());

// 2. Volume
// Write a JavaScript program to get the volume of a cylinder with four decimal places using object classes.

// Note: Volume of a cylinder : V = πr2h - r is the radius and h is the height of the cylinder.

class cylinderVolume {
    constructor(radius, height) {
        this.GetVolume = function () {
            let volume = (Math.PI * Math.pow(radius, 2) * height).toFixed(2);
            return volume
        }
    }
}

const cylinder = new cylinderVolume(7, 10);
//console.log(cylinder.GetVolume());


// 3. Tick Tock
// Rewrite the following code to use the "class" syntax.

// function Clock({ template }) {

//     let timer;

//     function render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     this.stop = function () {
//         clearInterval(timer);
//     };

//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };

// }

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();


class Clock {
    constructor({ template }) {

        let timer;

        this.GetRender = function () {
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            let output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        this.stop = function () {
            clearInterval(timer);
        };

        this.start = function () {
            this.GetRender();
            timer = setInterval(this.GetRender(), 1000);
        };

    }
}

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();
//console.log(clock);



// 4. TV Class
// Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.

// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.

// Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 
//the TV will stay at the current channel.

// Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class TV {

    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
    Reset() {
        this.volume = 50; this.channel = 1;
    }
    Status() { return `${this.brand} at channel ${this.channel}, volume ${this.volume}.` }

    ChangeChannel(channel) {
        if (channel < 50 && channel > 0) { this.channel = channel }
    }

    ChangeVolume(volume) {
        if (volume < 100 && volume > 0) { this.volume = volume; return volume } else { return `To hight` }
    }

}


// const myTv = new TV("Panasonic");
// myTv.ChangeChannel(4)
// myTv.ChangeChannel(70)
// myTv.ChangeVolume(7)
// myTv.ChangeVolume(150)
// console.log(myTv.ChangeVolume(150));
// myTv.Reset();
// console.log(myTv.Status());



// 5. Circle
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. 
// The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r)
// which give both respective areas and perimeter (circumference).

// Look at the example of a Rectangle constructor which can help you in getting started.

class Rectangle {

    constructor(sideA, sideB) {
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea() { return this.sideA * this.sideB };
    getPerimeter() { return (this.sideA + this.sideB) * 2 };
}

let rect = new Rectangle(11, 3);
rect.getArea();
//console.log(rect, rect.getArea());


class Circle {
    constructor(radius) {
        this.radius = radius;
        this.diameter;
        this.circunference;
        this.area;
    }

    getDiameter() { this.diameter = this.radius * 2; return this.diameter }
    getCircunference() { this.circunference = (Math.PI * (this.radius * 2)).toFixed(2); return this.circunference }
    getArea() { this.area = (Math.PI * Math.pow(this.radius, 2)).toFixed(2); return this.area }
}


let circ = new Circle(4.44);
circ.getDiameter();
circ.getCircunference();
circ.getArea();
//console.log(circ);


class Pokemon {
    constructor(name, health, ap) {
        this._name = name;
        this._health = health;
        this._ap = ap;
        this._skills = [];
    }

    learnAttack(attack) {
        this._skills.push(attack);
    }

    getStatus() {
        console.log(`Pokemon: ${this._name}, health/magic: ${this._health}/${this._ap}`);
    }

    attack(id, enemy) {
        if (this._ap > this._skills[id]._ap) {
            enemy._health -= this._skills[id]._damage;
            this._ap -= this._skills[id]._ap;
            if (enemy._health > 0) {
                console.log(`${enemy._name} took ${this._skills[id]._damage} of damage. Actual health is ${enemy._health} (-${this._skills[id]._damage} APs).`);
            } else {
                console.log(`${enemy._name} is dead.`);
            }
        } else {
            console.log("You don't have enough AP")
        }
    }

    getMagic(magic) {
        this._ap += magic;
        console.log(`${this._name} got ${magic} APs.`);
    }


}

class AttackSkill {
    constructor(attack, damage, ap) {
        this._attack = attack;
        this._damage = damage;
        this._ap = ap;
    }
}

const pikachu = new Pokemon("Pikachu", 100, 70);
const bulbasaur = new Pokemon("Bulbasaur", 95, 30);
const thunderstorm = new AttackSkill('Thunderstorm', 10, 5);
const razorleaf = new AttackSkill('Razor Leaf', 50, 15);

pikachu.learnAttack(thunderstorm);
bulbasaur.learnAttack(razorleaf);

pikachu.getStatus();