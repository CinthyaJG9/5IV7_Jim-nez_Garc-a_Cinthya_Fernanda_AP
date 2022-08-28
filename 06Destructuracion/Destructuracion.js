/**
 * 
 * Ejemplo de destructuración
 */

//tenemos el siguiente arrerglo

const arregloOrdenadoMayoraMenor = [10, 9 , 8 , 7 , 6, 5, 4, 3, 2, 1, 0];
console.log(`arregloOrdenadoMayoraMenor: ${arregloOrdenadoMayoraMenor}`);

//supongamos que usara varias veces la primera posicion que consiste en el valor mas grande del arreglo es conveniente destructurarlo para tener un nombre mas significativo
const [valorMasGrande] = arregloOrdenadoMayoraMenor;
console.log(`valorMasGrande: ${valorMasGrande}`);
//podemos obtener tantas variables como deseemos
//con el patron rest que  indica ...nobredelavariable podemos asignar el resto de valores
const [valorMasGrande1, valorMasGrande2, valorMasGrande3, ...restoDeValores] = arregloOrdenadoMayoraMenor;
console.log(``)