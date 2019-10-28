const myHometown = {
    city: 'Chicago',
    country: 'USA',
    population: 2700000,
    isCold: true,
    newcomers: function (x) {
        return this.population + x;
    }
}

// adding new properties

myHometown.state = 'Illinois';

// deleting new properties

delete myHometown.isCold;

//console.log(myHometown);

myHometown.newcomers(53000);

// testing our method

// console.log(myHometown.newcomers(53000));

//console.log(myHometown);

for (let x in myHometown) {
    console.log(`${x} - ${myHometown[x]}`);

}


// // another example

const movies = [
    {
        title: 'Spartacus',
        director: 'Stanley Kubrick',
        isGood: true
    },
    {
        title: 'Jaws',
        director: 'Steven Spielberg',
        isGood: true
    },
    {
        title: 'Titanic',
        director: 'James Cameron',
        isGood: false
    }];

console.log(movies);

// for is a loop

for (let i in movies) {

    if (movies[i].isGood) {
        console.log(`I love ${movies[i].title}!`);
    } else {
        console.log(`${movies[i].title} sucks!`);
    }
}

// // show length of an array
// console.log(Object.keys(myHometown).length); // 5 number of Objects

// // shows names of the Objects
// console.log(Object.keys(myHometown)); 

// // show values
// console.log(Object.values(myHometown));

const myPersonal = {
    name: "Arturo",
    lastName: "Rugh",
    age: 31,
    adress: {
        street: "Tellst",
        number: 11,
        plz: 673,
    },
    hobby: "coding"
}

console.log(`My name is ${myPersonal.name} and I live in ${myPersonal.adress.street} ${myPersonal.adress.number}.`);
console.log(myPersonal.age, myPersonal.name);


const movieOne = {
    title: "2001.Space Odyssey",
    director: "Kubric",
    yearReleased: 1968
}

const movieTwo = {
    title: "The holy mountain",
    director: "Jodorowsky",
    yearReleased: 1973
}

const getMovies = movie => {

    console.log(`${movie.title} directed by ${movie.director}.`);

}

getMovies(movieOne);







