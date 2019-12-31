import {ajax, AjaxError} from "rxjs/ajax";
import {catchError, map, pluck} from "rxjs/operators";
import {of} from "rxjs";

const url = 'https://api.github.com/users?per_page=5';

const errorManage = ( resp: Response ) => {
    if ( !resp.ok ) { throw new Error( resp.statusText ) }
    return resp;
};

const errorManageAjax = ( error: AjaxError ) => {
  console.warn( 'Error:', error );
  return of([]);
};

const fetchPromise = fetch( url );

// fetchPromise
//     .then( errorManage )
//     .then( value => value.json() )
//     .then( value => console.log('Data: ', value ) )
//     .catch( err => console.warn('Error: ', err ) );

const ajax$ = ajax( url );

ajax$
    .pipe(
        pluck('response'),
        catchError( errorManageAjax )
    )
    .subscribe( console.log );
