'use strict';

import Rx from 'rxjs/Rx';

let stream$ = Rx.Observable.create(
    observer => {
        console.log('stream$ was created!');

        observer.next('One');

        setTimeout(() => {
            observer.next('Two');
        }, 2000);

        setTimeout(() => {
            // observer.complete();
            observer.error('Something went wrong');
        }, 3000);

        setTimeout(() => {
            observer.next('Four');
        }, 4000);

        observer.next('Five');
    }
);

stream$.subscribe(
    data => console.log(data),
    err => console.error('Error: ', err),
    () => console.log('Completed')
);