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

Rx.Observable.interval(200)
    .map( data => data * data)
    .take(10)
    .subscribe(createSubscription('Map'));

Rx.Observable.of('hello', 'workd', 'wfm')
    .map( data => data.toUpperCase())
    .subscribe(createSubscription('Of'));


let input = document.querySelector('input');

Rx.Observable.fromEvent(input, 'keyup')
    // .map(data => data.target.value) 
    .pluck('target', 'value')
    .map(data => data.toUpperCase())
    .map(data => {
        return {
            value: data,
            length: data.length
        }
    })
    .subscribe(createSubscription('From event'))