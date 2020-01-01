import {ajax} from "rxjs/ajax";
import {startWith} from "rxjs/operators";

const body = document.querySelector('body');
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';


body.append( loadingDiv );

ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith( true )
    )
    .subscribe({
        next: value => {

            if ( value === true ) {

                body.append( loadingDiv )

            } else {

                document.querySelector('.loading').remove()

            }

            console.log('%c Value:', 'color: yellow', value)
        }

    });
