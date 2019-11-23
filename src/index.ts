import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next:', value),
    error: err => console.error( 'Error', err ),
    complete: () => console.info('Completado')
};

const intervalo$ = new Observable<number>( subscriber => {
    // Crear un contador
    let count: number = 0;

    const interval = setInterval( () => {
        subscriber.next( count++ );
        console.log( count );
    }, 1000);
    return () => {
        clearInterval( interval );
        console.log( 'Intervalo limpiado' );
    }
});

const subs1 = intervalo$.subscribe();
const subs2= intervalo$.subscribe();
const subs3 = intervalo$.subscribe();

setTimeout( () => {

    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();

    console.log( 'Completado timeout' );

    }, 3000 );
