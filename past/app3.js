'use strict';

import Rx from 'rxjs/Rx';

function createSubscribe(name) {
    return {
        next(x) {
            console.log(`${name}: ${x}`);
        },
        error(err) {
            console.error(`${name}: ${err}`)
        },
        complete() {
            console.log(`${name}: Completed!`)
        }
    }    
};

// Rx.Observable.of(5, 2, '3', 'And new string', [4, 2, 42])
//     .subscribe(createSubscribe('of'));[=]

// Rx.Observable.interval(100)
//     .take(10)
//     .subscribe(createSubscribe('interval'));

// Rx.Observable.timer(4000, 500)
//     .take(10)
//     .subscribe(createSubscribe('timer'));

Rx.Observable.range(3, 6)
    .subscribe(createSubscribe('range'));

