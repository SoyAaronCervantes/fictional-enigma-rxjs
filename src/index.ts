import {Observable, Observer, Subject} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next:', value),
    error: err => console.error( 'Error', err ),
    complete: () => console.info('Completado')
};

const interval$ = new Observable<number>( subscriber => {

    const interval = setInterval( () => subscriber.next( Math.random() ), 1000);
    return () => {
        clearInterval( interval );
        console.log( 'Intervalo destruido' );
    };

});
/**
 * Subject
 *
 * 1. Tiene un casteo multiple. Esto quiere decir que muchas subscripciones van a estar sujetas a este mimso observable
 * 2. También es un observer
 * 3. También se puede manejar el next, error, y complete
 */
const subject$ = new Subject();

const intervalSubject = interval$.subscribe( subject$ );

// const sub1 = interval$.subscribe( res => console.log('Subs 1:', res) );
// const sub2 = interval$.subscribe( res => console.log('Subs 2:', res) );

const sub1 = subject$.subscribe( observer );
const sub2 = subject$.subscribe( observer );


setTimeout( () => {

    subject$.next( 10 );

    subject$.complete();

    intervalSubject.unsubscribe();

}, 3500 );
