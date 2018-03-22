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

const s1$ = Rx.Observable.throw(new Error('Something goes wrong'));

const s2$ = Rx.Observable.interval(500).take(2);

s1$.onErrorResumeNext(s2$)
    .subscribe(createSubscription('onErrorResumeNext'));

