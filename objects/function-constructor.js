// PERSONAL COONSTRUCTOR
// CONSTRUCTOR FUNCTION

// function Person(name) {
//     this.name = name //without this. it returns Person {}
// }

// const leonard = new Person("Leonard");
// const arturo = new Person("Arturo");

// console.log(leonard)


// ===========

function Person(name, surname, dob) {
    this.name = name,
        this.surname = surname,
        this.birthday = new Date(dob),
        this.getFullName = function () {
            return `${this.name} ${this.surname}`
        },
        this.calcAge = function () {
            const diff = Date.now() - this.birthday.getTime();
            const ageDate = new Date(diff);
            return ageDate.getUTCFullYear() - 1970;
        }
}

const nancy = new Person("Nancy", "Drew", "10/11/1953");
console.log(nancy);
console.log(nancy.getFullName());
console.log(nancy.calcAge());


function car(name, branch, model, age) {
    this.name = name,
        this.branch = branch,
        this.model = model,
        this.age = new Date(age),
        this.getFullName = function () {
            return `${name} ${model}`
        }
    this.calcAge = function () {
        const diff = Date.now() - this.age.getTime();
        const ageDate = new Date(diff);
        return ageDate.getUTCFullYear() - 1970;
    }
}

const falcon = new car("Falcon", "Ford", "Peripe", "1967")


console.log(falcon);
console.log(falcon.calcAge());

// ARRAY

const arr1 = [1, 2, 3, 4];
const arr2 = []


