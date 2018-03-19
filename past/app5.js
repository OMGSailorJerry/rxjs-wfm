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

function delay(ms = 1000) {
    return new Promise((res, rej) => { 
        setTimeout(() => res('Data'), ms);
    })
};

// delay(3000).then(() => console.log('Promise was resolved'));

const stream$ = Rx.Observable.fromPromise(delay(2000))
    .subscribe(createSubscription('fromPromise'));