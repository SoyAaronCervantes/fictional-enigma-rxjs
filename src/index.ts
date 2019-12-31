import {ajax} from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const ajax$ = ajax.getJSON( url, {
    'content-type': 'application/json',
    'mi-token': 'abc123'
});

ajax$.subscribe({
    next: value => console.log('%c Data:', 'color: yellow', value)
});
