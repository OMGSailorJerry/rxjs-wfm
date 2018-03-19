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

Rx.Observable.of(1, 2, 3, 4, 5, 'Hello', 'world')
    // .first() /** */
    // .last()  /** */
    // .find((data) => {
    //     if (typeof data === 'string') {
    //         return data.toLowerCase() === 'hello';
    //     }
    // })
    // .findIndex(data => data === 5)
    // .take(3)
    // .skip(5)
    // .skipWhile(data => typeof data === 'number')
    // .subscribe(createSubscription('Of'));

// Rx.Observable.interval(300)
//     .skipWhile(data => data < 5)
//     .takeWhile(data => data < 13)
//     .subscribe(createSubscription('skipWhile'));

Rx.Observable.interval(300)
    .skipUntil(Rx.Observable.timer(3000))
    .takeUntil(Rx.Observable.timer(6000))
    .subscribe(createSubscription('skipWhile'));