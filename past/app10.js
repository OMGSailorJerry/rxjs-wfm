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
console.log('---- defaultIfEmpty -------------------------------')
Rx.Observable.of(1, 2, 3)
    .defaultIfEmpty('This is empty stream!')
    .subscribe(createSubscription('defaultIfEmpty'));

console.log('---- every ----------------------------------------')
Rx.Observable.from([1, 2, 3, 4, 5])
    .map(res => res * 2 )
    .every(res => res % 2 === 0)
    .subscribe(createSubscription('every 1'));

console.log('---- skipWhile + every ----------------------------')
Rx.Observable.from([1, 2, 3, 4, 5])
    .skipWhile(res => res <= 3)
    .every(res => res > 2)
    .subscribe(createSubscription('every 2'));

console.log('---- do ------------------------------------------')
Rx.Observable.range(1, 3)
    .do(res => console.log('Before:', res))
    .map(res => res * res)
    .do(res => console.log('After:', res))
    .subscribe(createSubscription('do'));

console.log('---- let -----------------------------------------')
Rx.Observable.range(1, 3)
    .map(res => res + 1)
    .let(observer => observer.map(x => x * x))
    .subscribe(createSubscription('do'));

console.log('---- delay ----------------------------------------')
Rx.Observable.range(1, 3)
    .map(res => res * res)
    .delay(2000)
    .subscribe(createSubscription('do'));