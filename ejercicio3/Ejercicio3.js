// 3)Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
// -Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
// -Almacenar el numero más grande en una variable global y pasarlo a una función para determinar si el numero es par o impar

'use strict'

// Definir el arreglo
let arreglo = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

// Encontrar el número más grande del arreglo
let numeroMasGrande = Math.max(...arreglo);

// Imprimir el número más grande por consola
console.log(`El número más grande del arreglo es: ${numeroMasGrande}`);

// Variable global para almacenar el número más grande
globalThis.numeroMasGrandeGlobal = numeroMasGrande;

// Función para determinar si un número es par o impar
function determinarParImpar(numero) {
    if (numero % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }
}
// Pasar el número más grande a la función y obtener el resultado

let resultado = determinarParImpar(globalThis.numeroMasGrandeGlobal);
console.log(`El número ${numeroMasGrandeGlobal} es ${resultado}`); 


