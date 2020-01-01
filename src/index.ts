import {fromEvent, interval} from "rxjs";
import {mergeMap, switchMap} from "rxjs/operators";

const click$ = fromEvent<MouseEvent>( document, 'click' );
const interval$ = interval( 1000 );

/**
 * switchMap : Mantiene solamente una subscripción activa
 */

/**
 * mergeMap : Mantiene todas las subscripciones activas
 */

click$
    .pipe(
        // mergeMap( () => interval$ ),
        switchMap( () => interval$ ),
    )
    .subscribe( console.log );
