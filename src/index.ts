import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next:', value),
    error: err => console.error( 'Error', err ),
    complete: () => console.info('Completado')
};
