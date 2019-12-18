import { from, of } from 'rxjs';

/**
 * of: Toma argumentos y genera una secuencia
 * from: Genera un observable con base en un array, object, promise, iterable, observable, etc.
 */

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
};

const miGenerador = function *() {

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;

};

const iterable = miGenerador();

from( iterable ).subscribe( observer );

// const source$ = from([1,2,3,4,5]);
// const source$ = of([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

// const source$ = from('Aarón');
// const source$ = of('Aarón');

const source$ = from( fetch('https://api.github.com/users/soyaaroncervantes') );

// source$.subscribe( async (res) => {
//
//     console.log( res );
//
//     const resData = await res.json();
//
//     console.log(resData);
//
// });

// source$.subscribe( observer );
