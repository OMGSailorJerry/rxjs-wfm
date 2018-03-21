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

// const s1$ = Rx.Observable.of('Hello');
// const s2$ = Rx.Observable.of('World');

// Rx.Observable
//     .zip(s1$, s2$.delay(5000))
//     .subscribe(createSubscription('Zip'));

// const interval$ = Rx.Observable.interval(1000);

// Rx.Observable
//     .zip(
//         interval$,
//         interval$.take(3),
//     Rx.Observable.of('WFM'))
//     .subscribe(createSubscription('Zip'));

// const int1$ = Rx.Observable.interval(1000);
// const int2$ = Rx.Observable.interval(500);

// int1$.withLatestFrom(int2$)
//     .take(5)
//     .subscribe(createSubscription('WithLatesFrom'));

const t1$ = Rx.Observable.timer(1000, 2000);
const t2$ = Rx.Observable.timer(2000, 2000);
const t3$ = Rx.Observable.timer(3000, 2000);
const t4$ = Rx.Observable.timer(4000, 2000);

Rx.Observable
    .combineLatest(t1$, t2$, t3$, t4$)
    .take(10)
    .subscribe(createSubscription('CombineLatest'));