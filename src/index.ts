import {forkJoin} from "rxjs";
import {ajax} from "rxjs/ajax";

const github_API_URL = 'https://api.github.com/users';
const github_USER = 'soyaaroncervantes';

forkJoin({
    usuario: ajax.getJSON(`${ github_API_URL }/${github_USER}`),
    repos: ajax.getJSON(`${ github_API_URL }/${github_USER}/repos`),
    gists: ajax.getJSON(`${ github_API_URL }/${github_USER}/gists`),
}).subscribe( console.log );
