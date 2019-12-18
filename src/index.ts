import {fromEvent, range} from 'rxjs';
import {map, mapTo, pluck} from "rxjs/operators";

// range(1, 5)
//     .pipe(
//         map<number, string>( value => (value * 10).toString() )
//     )
//     .subscribe( console.log );

const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyUpCode$ = keyUp$.pipe(
    map( event => event.code)
);

const keyUpPluck$ = keyUp$.pipe(
    pluck("target", 'baseURI')
);

const keyUpMapTo$ = keyUp$.pipe(
    mapTo('Tecla presionada')
);


keyUp$.subscribe( console.log );
keyUpCode$.subscribe( res => console.log('%c map:', 'color: pink', res) );
keyUpPluck$.subscribe( res => console.log('%c pluck:', 'color: lightblue', res) );
keyUpMapTo$.subscribe( res => console.log('%c map To:', 'color: yellow', res) );
