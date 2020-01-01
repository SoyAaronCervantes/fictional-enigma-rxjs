import {forkJoin, interval, of} from "rxjs";
import {delay, take} from "rxjs/operators";

const numeros$ = of(1,2,3,4);
const interval$ = interval(1000).pipe( take(3) );
const letras$ = of('a','b','c','d').pipe( delay(3500) );

//forkJoin( numeros$, interval$, letras$ ).subscribe( console.log );

// forkJoin( numeros$, interval$, letras$ ).subscribe( value => {
//     console.log('numeros:', value[0] );
//     console.log('intervalo:', value[1] );
//     console.log('letras:', value[2] );
// });

// forkJoin({ numeros$, interval$, letras$ }).subscribe( console.log );

forkJoin({
    num: numeros$,
    int: interval$,
    let: letras$
}).subscribe( value => console.log( value.int ) );
