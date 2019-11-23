import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next:', value),
    error: err => console.error( 'Error', err ),
    complete: () => console.info('Completado')
};

const intervalo$ = new Observable<number>( subscriber => {
    // Crear un contador
    let count: number = 0;

    setInterval( () => subscriber.next( count++ ), 1000);
});

const subs1 = intervalo$.subscribe( num => console.log( 'Num: ', num) );
const subs2= intervalo$.subscribe( num => console.log( 'Num: ', num) );
const subs3 = intervalo$.subscribe( num => console.log( 'Num: ', num) );

setTimeout( () => {

    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();

    }, 3000 );
