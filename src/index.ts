import {from, fromEvent, range} from "rxjs";
import {filter, map} from "rxjs/operators";

// range(1,10)
//     .pipe(
//         filter( value => value % 2 === 1 )
//     ).subscribe( console.log );

range(20,30)
    .pipe(
        filter( (value, index) => {
            console.log( 'index', index );
            return value % 2 === 1
        })
    );
// .subscribe( console.log );

interface personaje {
    tipo: string;
    nombre: string;
}

const personajes: personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

const personajes$ = from<personaje[]>( personajes );

personajes$
    .pipe(
        filter( value => value.tipo !== 'heroe' )
    )
    .subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map( value => value.code ),
        filter( value => value === 'Enter' )
    );

keyup$.subscribe( console.log );
