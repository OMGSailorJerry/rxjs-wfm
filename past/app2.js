'use strict';

import Rx from 'rxjs/Rx';

let button = document.querySelector('button');
let input = document.querySelector('input');

let btn$ = Rx.Observable.fromEvent(button, 'click');

let input$ = Rx.Observable.fromEvent(input, 'keyup')
    .subscribe( event => console.log(event) );

btn$.subscribe(
    event => console.log(event),
    err => console.error(err)
);

Rx.Observable.fromEvent(document, 'mousemove')
    .subscribe( event => {
        document.querySelector('h1')
            .innerText = `X: ${event.clientX}, Y: ${event.clientY}`;
    })

