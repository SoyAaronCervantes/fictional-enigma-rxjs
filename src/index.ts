import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next:', value),
    error: err => console.error( 'Error', err ),
    complete: () => console.info('Completado')
};

const interval$ = new Observable<number>( subscriber => {

    const interval = setInterval( () => subscriber.next( Math.random() ), 3000);
    return () => clearInterval( interval );

});

const sub1 = interval$.subscribe( res => console.log('Subs 1:', res) );
const sub2 = interval$.subscribe( res => console.log('Subs 2:', res) );
