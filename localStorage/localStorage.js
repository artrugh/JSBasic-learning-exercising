// LOCAL STORAGE API //

// setItem(key, value) - store key / value pair
// getItem (key) - get value by key
// removeItem (key) - remove the value with its key
// clear () - delete everything
// key (index) - gets the key on a given position
// length - the number of stored item

localStorage.setItem('my name', 'Benjamin');
localStorage.setItem('my hometown', 'Chicago');
localStorage.cities = "Manhatan";

const America = localStorage.getItem('cities');

console.log(America);

const beats = (localStorage.music = 'reggae');
//console.log(`I like to dance all night long to ${beats}.`);

const myself = localStorage.getItem('my name');
//console.log(myself);

// // LOOPS // //

// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     console.log(`${key}: ${localStorage.getItem(key)} ${i}`);    
// }

// Using keys method

let keys = Object.keys(localStorage);

// for (let key of keys) {
//     console.log(`${key}; ${localStorage.getItem(key)}`);
// }

// // JSON // //

localStorage.user = JSON.stringify({ name: "Guinevere", surname: "Whang" });
// converts object to JSON string.

let user = JSON.parse(localStorage.user);
// parses a JSON string, constructing the JavaScript value or object described by the string.

console.log(user.name, user.surname);

localStorage.removeItem('cities');
// localStorage.clear();


const title = document.querySelector('#title');
//console.log(title.textContent);
localStorage.setItem('title', title.textContent);

const storedTitle = localStorage.getItem('title')
console.log(storedTitle);


const input = document.querySelector("#input")
const form = document.querySelector("#form")
const ul = document.querySelector("#ul")
const button = document.querySelector("#button")


const createList = (e) => {
    //console.log(e);
    e.preventDefault()

    const li = document.createElement("li");
    
    ul.appendChild(li);
    li.textContent = input.value;
    localStorage.setItem(new Date().getMilliseconds()
    , input.value);
    input.value = "";
    //console.log(input.value);    

}

//createList()

form.addEventListener("submit", createList);


localStorage.clear();