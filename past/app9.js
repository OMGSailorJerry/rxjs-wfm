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

// Rx.Observable.interval(500)
//     .bufferTime(2000)
//     .take(3)
//     .subscribe(createSubscription('BufferTime'));

// Rx.Observable.range(0, 40)
//     .bufferCount(5)
//     .subscribe(createSubscription('BufferTime'));

Rx.Observable.interval(1000)
    .buffer(Rx.Observable.fromEvent(document, 'click'))
    .map(data => data[data.length - 1])
    .subscribe(createSubscription('Buffer'));