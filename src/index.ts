import {from, of} from "rxjs";
import {distinct} from "rxjs/operators";

const numbers$ = of(1,1,1,3,3,2,2,4,5,3,1);

numbers$
    .pipe(
        distinct()
    )
    .subscribe( console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Dr. Willy' },
    { nombre: 'X' },
    { nombre: 'Megaman' },
    { nombre: 'Zero' },
];

from( personajes )
    .pipe(
        distinct( value => value.nombre )
    )
    .subscribe( console.log );
