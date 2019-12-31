import {from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

interface Personaje {
    name: string;
}

const personajes: Personaje[] = [
    { name: 'Megaman' },
    { name: 'Megaman' },
    { name: 'X' },
    { name: 'Zero' },
    { name: 'Dr. Willy' },
    { name: 'X' },
    { name: 'X' },
    { name: 'Zero' },
];

from( personajes )
    .pipe(
        distinctUntilKeyChanged('name')
    )
    .subscribe( console.log );
