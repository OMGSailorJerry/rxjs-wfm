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

const subject$ = new Rx.Subject();
const int$ = new Rx.Observable.interval(1000);

subject$.next(1);
subject$.next(2);

setTimeout(() => {
    subject$.next(3);
    subject$.complete();
}, 2000);

// int$.subscribe(subject$);

// subject$.subscribe(createSubscription('Subject 1'));
// subject$.subscribe(createSubscription('Subject 2'));

setTimeout(() => {
//     subject$.subscribe(createSubscription('Subject 3'));
}, 2000);

const bhvrSubject$ = new Rx.BehaviorSubject('WFM');

// bhvrSubject$.subscribe(createSubscription('BehaviorSubject'))

bhvrSubject$.next('Hello');
bhvrSubject$.complete();

const replaySubject$ = new Rx.ReplaySubject(2);

replaySubject$.next(1);
replaySubject$.next(2);
replaySubject$.next(3);
replaySubject$.complete();

// replaySubject$.subscribe(createSubscription('replaySubject$'))

const asyncSubject$ = new Rx.AsyncSubject()

asyncSubject$.next(1);
asyncSubject$.next('WFM');
asyncSubject$.complete();

asyncSubject$.subscribe(createSubscription('AsyncSubject'));