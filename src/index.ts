// Form [ HTML ]

import {fromEvent, of} from "rxjs";
import {catchError, exhaustMap, map, mergeMap, pluck, switchMap, tap} from "rxjs/operators";
import {ajax, AjaxResponse} from "rxjs/ajax";

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitBtn = document.createElement('button');
const body = document.querySelector('body');

// Config

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

submitBtn.innerHTML = 'Submit';
submitBtn.type = 'submit';

form.append( inputEmail, inputPassword, submitBtn );
body.append( form );

interface userLogin {
    email: string;
    password: string;
}

// functions
const url = 'https://reqres.in/api/login?delay=1';
const httpLoginRequest =
    ( userPass: userLogin ) =>
        ajax.post( url, userPass )
            .pipe(
                pluck('response', 'token'),
                catchError( err => of('xxx') )
            );

// streams
const submitForm$ = fromEvent<Event>( form, 'submit' )
    .pipe(
        tap( x => x.preventDefault() ),
        map<Event, userLogin>( value => ({
                email: value.target[0].value,
                password: value.target[1].value
            })
        ),
        // mergeMap( httpLoginRequest ),
        switchMap( httpLoginRequest ),
        // exhaustMap( httpLoginRequest ),
    )
    .subscribe({
        next: value => console.log('%c [TOKEN] value:', 'color: pink', value),
        error: err =>  console.warn('%c [TOKEN] error:', 'color: pink', err),
    });
