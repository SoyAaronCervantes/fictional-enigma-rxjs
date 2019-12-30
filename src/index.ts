import {of} from "rxjs";
import {take, tap} from "rxjs/operators";

const numeros$ = of(1,2,3,4,5)
    .pipe(
        tap( console.log ),
    );

numeros$
    .pipe(
        tap( value => console.log('%c tap', 'color: pink', value ) ),
        take(3)
    )
    .subscribe({
        next: value => console.log('value: ', value),
        complete: () => console.log('complete')
    });
