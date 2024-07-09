// 4)Implemente un algoritmo de ordenamiento con el método Bubble Sort para que ordene,
// un arreglo de longitud N en orden descendente.

'use strict'

function bubbleSortDescendente(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                // Intercambiar los elementos
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Reduce el rango de comparación en 1 después de cada pasada
        n--;
    } while (swapped);

    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Arreglo ordenado en orden descendente: ", bubbleSortDescendente(arr));


