import {fromEvent, Observable} from "rxjs";
import {debounceTime, map, mergeAll, pluck} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import {GithubUsers} from "./interfaces/github-users.interface";
import {GithubUser} from "./interfaces/github-user.interface";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append( textInput, orderList );

// Helpers

const showUser = ( users: GithubUser[] ) => {

  console.log( users );

  orderList.innerHTML = '';

    for (let user of users) {

        const listItem = document.createElement('li');

        const img = document.createElement('img');

        const anchor = document.createElement('a');

        img.src = user.avatar_url;

        anchor.href = user.html_url;
        anchor.text = 'Ir a la página';
        anchor.target = '_blank';

        listItem.append( img );

        listItem.append( document.createElement('br') );

        listItem.append( user.login + ' ' );

        listItem.append( document.createElement('br') );

        listItem.append( anchor );

        listItem.append( document.createElement('br') );

        orderList.append( listItem );

    }

};

// Stream

const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input$
    .pipe(
        debounceTime(1000),
        pluck<KeyboardEvent, string>('target', 'value'),
        map<string, Observable<GithubUsers>>( value => ajax.getJSON(`https://api.github.com/search/users?q=${ value }`) ),
        mergeAll(),
        pluck('items'),
    )
    .subscribe( showUser );
