// for (i = 0; i <= 100; i++) {

//     //console.log(i);

//     for (b = 1; b <= 100; b++) {

//         if (i % b === 0) {

//             //console.log(b)
//         }
//         // console.log(sum);
//     }
// }

//console.log(i);
//console.log(b);

// let arr = [2, 4, 2, 3, 1, 10];
// let res = 0;
// let a;

// for (a = 0; a < 10; a++) {
//     for (b = 0; b < 10; b++) {
//         //console.log(a);
//         for (c = 0; c < 10; c++) {

//             if (a != 0 && a != b && b != 1 && a % b === 0) {

//                 if (c != a) {
//                     res = c;
//                 }
//             }
//         }
//     }
// }

//console.log(res);
// console.log(a, b);


// if (a != 0 && a != b && b != 1 && a % b === 0) {


// let arr = [2, 4, 2, 3, 1, 10];
// let res = 0;
// let a;

// for (a = 2; a <= 11; a++) {
//     for (b = 1; b <= 10; b++) {
//         res = a * b;
//         console.log(res);
//     }
// }


for (a = 1; a <= 100; a++) {

    //console.log(a, 'a');
    c = 0

    for (b = 1; b <= 100; b++) {

        // console.log(b, 'b');

        if (a % b === 0) {
            c++;
            // console.log(a, b, c);


        }

        //console.log(c, 'c');


    }

    if (c === 2) {
        console.log(a, "PrimeNumber");
    }


}

// for (i = 1; i <= limit; i++) {
//     c = 0;

//     for (j = 1; j <= i; j++) {
//         // % modules will give the reminder value, so if the reminder is 0 then it is divisible
//         if (i % j == 0) {
//             //increment the value of c
//             c++;
//         }
//     }

//     //if the value of c is 2 then it is a prime number
//     //because a prime number should be exactly divisible by 2 times only (itself and 1)
//     if (c == 2) {
//         document.getElementById("result").insertAdjacentHTML('beforeend', i + '<br>');
//     }
// }












