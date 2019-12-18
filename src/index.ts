import { asyncScheduler } from 'rxjs';

/**
 * Se puede realuzar con el asyncScheduler
 * la funcionalidad del setTimeout y el setInterval
 */

// setTimeout( () => {}, 3000 );
// setInterval( () => {}, 3000 );

const saludar = () => console.log('Hola mundo');
const saludar2 = ( nombre ) => console.log(`Hola ${ nombre }`);

/**
 * SetTimeout
 */

// asyncScheduler.schedule( saludar, 2000 );
// asyncScheduler.schedule( saludar2, 2000, 'Aarón' );

/**
 * setInterval
 */

const subs = asyncScheduler.schedule(
    function ( state ) {

        console.log( 'state', state );

        this.schedule( state + 1, 1000 );

    }, 3000, 0);

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 );
