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

// console.log('---- merge -------------------------------')

// const s1$ = Rx.Observable.of('Hello');
// const s2$ = Rx.Observable.of('World');

// s1$.merge(s2$).subscribe(createSubscription('merge'));

// console.log('---- merge -------------------------------')

// Rx.Observable
//     .merge(s1$, s2$)
//     .subscribe(createSubscription('merge'));

// console.log('---- merge -------------------------------')

// const s3$ = Rx.Observable.interval(1000).map(res => 'stream 3:' + res);
// const s4$ = Rx.Observable.interval(500).map(res => 'stream 4:' + res);

// Rx.Observable
//     .merge(s3$, s4$)
//     .take(10)
//     .subscribe(createSubscription('merge'));

// console.log('---- merge -------------------------------')

// Rx.Observable.range(1, 3)
//     .map(res => Rx.Observable.range(1, 3))
//     .mergeAll()
//     .subscribe(createSubscription('mergeAll'));


// const s5$ = Rx.Observable.from([1, 2, 3]);
// const s6$ = Rx.Observable.from([4, 5, 6]);

// Rx.Observable.concat(s6$, s5$).subscribe(createSubscription('Concat'))

Rx.Observable.range(5, 3)
    .map( res => Rx.Observable.range(res, 3))
    .concatAll()
    .subscribe(createSubscription('ConcatAll'))