import {fromEvent, interval} from "rxjs";
import {concatMap, exhaustMap, take} from "rxjs/operators";

/**
 * exhaustMap: Mantiene una subscripción activa, y si una subscripción es emitida mientras tiene una
 * subscripción activa es ignorada. Pero si no existe una subscripción activa y es emitida un nuevo valor,
 * este se tomará como subscripción activa.
 */

const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent<MouseEvent>( document, 'click' );

click$
    .pipe(
        exhaustMap( () => interval$ )
    )
    .subscribe( console.log );
