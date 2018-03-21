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

// Rx.Observable.of('Hello')
//     .subscribe(res => {
//         Rx.Observable.of(`${res} World`)
//             .subscribe(createSubscription('MergeMap'))
//     });

// Rx.Observable.of('Hello')
//     .mergeMap(res => {
//         return Rx.Observable.of(`${res} World`)
//     })
//     .subscribe(createSubscription('MergeMap'))

// const promise = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${data} says hello`);
//         }, 2000);
//     })
// };

// Rx.Observable.of('WFM')
//     .mergeMap(res => {
//         return promise(res);
//     })
//     .subscribe(createSubscription('Promise'));

Rx.Observable.range(1, 10)
    .concatMap((res, index) => {
        return Rx.Observable.interval(100)
            .take(res)
            .map(res => index)
    })
    .subscribe(createSubscription('concatMap'));