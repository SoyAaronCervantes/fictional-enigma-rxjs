import {ajax} from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

ajax.post( url, {
    id: 1,
    name: 'Aarón'
}, {
    'mi-token': 'abc123'
})
    .subscribe( value => console.log('%c [POST] Value:', 'color: pink', value) );

ajax.put( url, {
    id: 1,
    name: 'Aarón'
}, {
    'mi-token': 'abc123'
})
    .subscribe( value => console.log('%c [PUT] Value:', 'color: lightyellow', value) );

ajax.delete( url, { 'mi-token': 'abc123' } )
    .subscribe( value => console.log('%c [DELETE] Value:', 'color: lightblue', value) );


ajax({
   url,
   method: 'delete',
    headers: {
       'mi-token': 'abc123'
    },
    body: {
       id: 2,
        name: 'Aarón'
    }
})
    .subscribe(  value => console.log('%c [DYNAMIC REQUEST] Value:', 'color: lightgreen', value)  );
