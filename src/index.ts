import {from, of} from "rxjs";
import {distinct, distinctUntilChanged} from "rxjs/operators";

const numbers$ = of(1,1,1,3,3,2,2,4,5,3,1);

numbers$
    .pipe(
        distinctUntilChanged()
    )
    .subscribe( console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Dr. Willy' },
    { nombre: 'X' },
    { nombre: 'X' },
    { nombre: 'Zero' },
];

from( personajes )
    .pipe(
        distinctUntilChanged( (x, y) => x.nombre === y.nombre )
    )
    .subscribe( console.log );
