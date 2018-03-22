'use strict';

import Rx from 'rxjs/Rx';

function getUserById(id) {
    const params = {
        access_token: '27434b9a8551eaff383667ee07dfd0ab3cc1efc35a9cb788e9b1780ff70d9d4f240279d337e45a88887a0',
        user_ids: id,
        fields: 'photo_big',
        v: '5.52'
    };

    return $.ajax({
        url: 'https://api.vk.com/method/users.get?' + $.param(params),
        type: 'GET',
        dataType: 'JSONP'
    }).promise()
};

Rx.Observable.fromEvent($('input'), 'keyup')
    .pluck('target', 'value')
    .distinct()
    .debounceTime(2000)
    .mergeMap(res => Rx.Observable.fromPromise(getUserById(res)))
    .catch(error => Rx.Observable.of(error))
    .map(res => res.response[0])
    .subscribe(
        res => {
            $('h1').html(`${res.first_name} ${res.last_name} <i>${res.id}</i>`)
            $('img').attr('src', res.photo_big);
        },
        err => console.error(err),
        () => console.log('Completed')
    );