const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador: number, valorActual: number ) => acumulador + valorActual;

const total = numbers.reduce( totalReducer, 0 );

console.log( total );
