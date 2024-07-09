'use strict'
// 2)Realice un programa que devuelva la potencia de un número. La base y el exponente deben ser ingresados por teclado.
// Sólo deben admitirse exponentes mayores o iguales a cero. Recuerde que el resultado de un numero elevado a 0 es 1.
// Separe la lógica de calcular la potencia utilizando métodos (se resuelve con funciones). 


// Función para calcular la potencia
function calcularPotencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    } else {
        return Math.pow(base, exponente);
    }
}

// Función principal para solicitar los valores y mostrar el resultado
function main() {

    // Solicitar la base y el exponente al usuario
    let base = parseFloat(prompt("Por favor, ingrese la base:"));
    let exponente = parseInt(prompt("Por favor, ingrese el exponente (mayor o igual a 0):"));

    // Validar que el exponente sea mayor o igual a cero
    if (exponente < 0) {
        console.log("El exponente debe ser mayor o igual a cero.");
    } else {
        // Calcular la potencia y mostrar el resultado
        let resultado = calcularPotencia(base, exponente);
        alert("El resultado de " + base + " elevado a la " + exponente + " es: " + resultado);
    }
}

// Ejecutar el programa principal nuevamente
main();

