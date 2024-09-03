
import apareo from './src/apareo.js';
import fileUtils from './src/utils/fileUtils.js';
import transformUtils from './src/utils/transformUtils.js';

// leo los 4 archivos a memoria
let archivo1 = fileUtils.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in');
let archivo2 = fileUtils.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in');
let archivo3 = fileUtils.leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in');
let archivo4 = fileUtils.leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in');


// preparo los 4 arrays a partir de los archivo leidos
console.log('Transformacion de String en array1 de numeros: ')
const array1 = transformUtils.transformarStringEnArrayDeNumeros(archivo1, ',');
console.log(array1);

console.log('Transformacion de String en array2 de numeros: ')
const array2 = transformUtils.transformarStringEnArrayDeNumeros(archivo2, ',');
console.log(array2);

console.log('Transformacion de String en array3 de numeros: ')
const array3 = transformUtils.transformarStringEnArrayDeNumeros(archivo3, ',');
console.log(array3);

console.log('Transformacion de String en array4 de numeros: ')
const array4 = transformUtils.transformarStringEnArrayDeNumeros(archivo4, ',');
console.log(array4);


//transformo el string y el array de numeros
//Se realizo transformacion de array de numeros en el punto anterior

console.log('\nTranformación de un array de numeros a String: ')
console.log(transformUtils.transformarArrayDeNumerosAUnSoloString(array1, ','));


// combino los primeros dos arrays
console.log('\nCombino los dos primeros arrays: ')
console.log(apareo.combinarDosArrays(array1, array2));

// combino los cuatro arrays
const arrs = [array1, array2, array3, array4];
console.log('\nCombino los cuatro arrays: ')
console.log(apareo.combinarNArrays(arrs));
