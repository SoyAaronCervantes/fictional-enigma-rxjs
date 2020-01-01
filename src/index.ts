import {fromEvent, interval, of} from "rxjs";
import {map, mergeMap, take, takeUntil} from "rxjs/operators";

const letras$ = of('a','b','c');

letras$
    .pipe(
        mergeMap( letter =>
            interval(1000)
                .pipe(
                    map( i => letter + i ),
                    take(3)
                )
        )
    );
// .subscribe({
//     next: value => console.log('%c Valor', 'color: pink', value),
//     complete: () =>  console.log('%c Complete', 'color: lightgreen')
// });

const mouseDown$ = fromEvent<MouseEvent>( document, 'mousedown' );
const mouseUp$ = fromEvent<MouseEvent>( document, 'mouseup' );
const interval$ = interval();

mouseDown$
    .pipe(
        mergeMap( () => interval$
            .pipe(
                takeUntil( mouseUp$ )
            )
        )
    )
    .subscribe( console.log );

