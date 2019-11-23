import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next:', value),
    error: err => console.error( 'Error', err ),
    complete: () => console.info('Completado')
};

// const obs$ = Observable.create()
const obs$ = new Observable<string>( subscriber => {

    subscriber.next( 'Hola' );
    subscriber.next( 'Mundo' );

    subscriber.next( 'Hola' );
    subscriber.next( 'Mundo' );

    // Forzar un error;
    // const a  = undefined;
    // a.nombre = 'Fernando';

    subscriber.complete();

    subscriber.next( 'Hola' );
    subscriber.next( 'Mundo' );

});

// obs$.subscribe(
//     res => console.log( 'next: ', res ),
//     err => console.warn( 'error: ', err ),
//     () => console.info( 'Complete' )
// );

obs$.subscribe( observer );
