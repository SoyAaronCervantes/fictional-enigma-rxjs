import {fromEvent} from "rxjs";

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const observe = {
    next: val => console.log('Next: ', val)
};

src1$.subscribe( ({ x, y }) => console.log(x,y));
src2$.subscribe( ev => console.log( ev.key ) );
