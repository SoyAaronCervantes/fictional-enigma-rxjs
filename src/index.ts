import {fromEvent} from "rxjs";
import {first, map, tap} from "rxjs/operators";

const event$ = fromEvent<MouseEvent>(document, 'click');

event$
    .pipe(
        tap<MouseEvent>( value => console.log( '%c tap: ', 'color: pink', value ) ),
        // first( value => value.clientY > 150 )

        // map( value => ({
        //     clientY: value.clientY,
        //     clientX: value.clientX
        // }) )

        map( ({ clientY, clientX } ) => ({clientY, clientX})) ,
        first( value => value.clientY > 150 )
    )
    .subscribe({
        next: value => console.log('%c value: ', 'color: lightblue', value),
        complete: () => console.log('completed')
    });
