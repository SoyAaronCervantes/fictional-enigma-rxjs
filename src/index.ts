import {fromEvent} from "rxjs";
import {auditTime, map, tap} from "rxjs/operators";

const click$ = fromEvent<MouseEvent>( document, 'click' );

click$
    .pipe(
        map(({ x }) => ({ x })),
        tap( value => console.log('%c Value [ tap ]', 'color: lightcoral', value ) ),
        auditTime( 2000 )
    )
    .subscribe({
        next: value => console.log( '%c value:', 'color: yellow', value )
    });
