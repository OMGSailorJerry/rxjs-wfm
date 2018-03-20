'use strict';

import Rx from 'rxjs/Rx';

function createSubscription(name) {
    return {
        next(x) {
            console.log(`${name}:`, x);
        },
        error(err) {
            console.error(`${name}: ${err}`)
        },
        complete() {
            console.log(`${name}: Completed!`)
        }
    }    
};

Rx.Observable.range(0, 10)
    .filter(data => data % 2 || data > 5)
    .subscribe(createSubscription('filter'));

let cars = [
    {
        name: 'Volvo',
        price: 24000
    },
    {
        name: 'Skoda',
        price: 14000
    },
    {
        name: 'BMW',
        price: 34000
    }
];

let input = document.querySelector('input');
let output = document.querySelector('div');
let btn = document.querySelector('button');

// Rx.Observable.fromEvent(input, 'keyup')
//     .pluck('target', 'value')
//     .subscribe(inputData => {
//         Rx.Observable.from(cars)
//             .filter(carsData => carsData.name === inputData)
//             .subscribe(finalData => {
//                 output.innerHTML = `<h2>${finalData.name}</h2><h4>${finalData.price}</h4>`
//             })
//     });

// Rx.Observable.fromEvent(input, 'keyup')
//     // .debounceTime(1000)
//     .pluck('target', 'value')
//     .distinct()
//     .subscribe(createSubscription('debounceTime'))

Rx.Observable.from([1, 2, 3, 3, 5, 5, 1, 1, 99, 99, 2, 4, 6])
    .distinctUntilChanged()
    .subscribe(createSubscription('From'));