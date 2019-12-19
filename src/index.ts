import {range} from "rxjs";
import {map, tap} from "rxjs/operators";

const numeros$ = range(1,5);

numeros$
    .pipe(
        tap(  x => console.log('%c Antes del Map:', 'color: red', x ) ),
        map( value => (value * 10) ),
        tap({
            next: value => console.log('%c Después del Map:', 'color: lightblue', value ),
            complete: () =>  console.log('%c Completado', 'color: yellow' )
        }),
    )
    .subscribe( value => console.log('%c Subscribe:', 'color: pink', value ) );
