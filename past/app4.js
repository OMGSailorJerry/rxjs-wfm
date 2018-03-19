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

console.log('**************** From Array ***************')

const arr = [
    {
        id: 1,
        name: 'WFM-1'
    }, {
        id: 2,
        name: 'WFM-2'
    }
];

Rx.Observable.from(arr)
    .subscribe(createSubscription('from'));

//---------------------------------------------------------//
console.log('*************** From Set *******************')

const set = new Set([1, 2, 3, '4', '5', arr[1]]);

Rx.Observable.from(set)
    .subscribe(createSubscription('from'));

//---------------------------------------------------------//
console.log('************** From Map ********************')

const map = new Map([[1, 2], [3, 4], [5, 6]]);

Rx.Observable.from(map)
    .subscribe(createSubscription('from'));

