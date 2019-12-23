import {from} from "rxjs";
import {map, reduce, scan} from "rxjs/operators";

const numbers = [1,2,3,4,5];

const totalAcumulador = ( acc, curr ) => acc + curr;

// reduce
from( numbers )
    .pipe(
        reduce( totalAcumulador, 0 )
    )
    .subscribe( console.log );

console.log(' \n%c **************** \n', 'color: pink');

// scan
from( numbers )
    .pipe(
        scan( totalAcumulador, 0 )
    )
    .subscribe( console.log );

// redux
interface usuario {
    id?: string;
    auth?: boolean;
    token?: string;
    age?: number;
}

const user: Partial<usuario[]> = [
    { id: 'fer', auth: false, token: null },
    { id: 'fer', auth: true, token: 'abc' },
    { id: 'fer', auth: true, token: 'abc123' },
];

const state$ = from( user )
    .pipe(
        scan<usuario>(
            ( (acc, value) => {
                return {...acc, ...value}
            }), { age: 33 }
        )
    );

const id$ = state$
    .pipe(
        map( value => value )
    )
    .subscribe( console.log );
