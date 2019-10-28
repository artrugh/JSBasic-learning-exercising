const now = new Date().setDate(24)
console.log(now);

const monthNumber = new Date().getMonth() + 1;

const winter = monthNumber === 12 || monthNumber === 1 || monthNumber === 2;
const spring = monthNumber === 3 || monthNumber === 4 || monthNumber === 5;
const summer = monthNumber === 6 || monthNumber === 7 || monthNumber === 8;
const autumn = monthNumber === 9 || monthNumber === 10 || monthNumber === 11;


if (winter) {

    console.log('It is winter!');

} else if (spring) {

    console.log('It is spring!');

} else if (summer) {

    console.log('It is summer!');

} else if (autumn) {

    console.log('It is autumn!');

}

let month = new Date().getMonth();
let season = ['winter', 'spring', 'summer', 'autumn'];

if (month <= 1 || month === 11) {

    console.log(season[0]);

} else if (month <= 4) {

    console.log(season[1]);

} else if (month <= 7) {

    console.log(month[2]);

} else if (month <= 10) {

    console.log(month[3]);

}
