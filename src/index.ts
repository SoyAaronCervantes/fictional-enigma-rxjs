import { of } from "rxjs";

// const obs$ = of(1,2,3,4,5,6);
const obs$ = of<number>(...[1,2,3,4,5,6],1,2,3,4,5,6,7,6,5,4);
// const obs$ = of([1,2], { a:1,b:2 }, () => {}, true, Promise.resolve( true ));

console.log('Inicio Obs');
obs$.subscribe(
    res => console.log( 'Next: ', res),
    null,
    () => console.log('Terminamos la secuencia')
);
console.log('Fin Obs');
