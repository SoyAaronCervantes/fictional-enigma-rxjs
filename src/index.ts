import {fromEvent, interval} from "rxjs";
import {skip, takeUntil, tap} from "rxjs/operators";

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append( button );

const counter$ = interval(1000);
// const clickBtn$ = fromEvent<MouseEvent>( button , 'click');
const clickBtn$ = fromEvent<MouseEvent>( button , 'click').pipe(
    tap( () => console.log('Antes del skip method') ),
    skip(1),
    tap( () => console.log('Después del skip method') )
);

counter$
    .pipe(
        takeUntil( clickBtn$ )
    )
    .subscribe({
        next: value => console.log('%c Valor:', 'color: pink', value),
        complete: () => console.log('%c Complete', 'color: lightcoral')
    });
