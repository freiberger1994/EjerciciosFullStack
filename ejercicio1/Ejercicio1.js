// 1)Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar y le informe al usuario
// En el caso de ser 0 (cero) el algoritmo deberá informarlo.

function mostrarNumero() {
    var numero = document.getElementById('numero').value;    // llamando a un elemento del html
        if (numero == 0) {
            alert("El numero es: 0");
        } else if (numero % 2 == 0) {
            alert("El número " + numero + " es par.");
            
        } else {
            alert("El número " + numero + " es impar.");
        }
    }
