// Guarda la información de los siguientes arrays:
 //   const precios : number[] = [525, 3500, 400, 1999];
 //   const productos : string[] = [“Leche”, “Galletitas”, “Harina”, “Queso”];
// En un archivo "precios.txt" y "productos.txt" respectivamente.
// Luego recupera la información en forma de array nuevamente y muestrala por consola.

'use strict'

var fs = require('fs'); 

// Arrays iniciales
const precios = [525, 3500, 400, 1999];
const productos = ["Leche", "Galletitas", "Harina", "Queso"];

// Guardar precios en precios.txt
fs.writeFileSync('precios.txt', JSON.stringify(precios));

// Guardar productos en productos.txt
fs.writeFileSync('productos.txt', JSON.stringify(productos));

console.log('Información guardada en archivos.');

// Leer precios desde precios.txt 
const preciosData = fs.readFileSync('precios.txt', 'utf-8');
const preciosRecuperados = JSON.parse(preciosData);

// Leer productos desde productos.txt
const productosData = fs.readFileSync('productos.txt', 'utf-8');
const productosRecuperados = JSON.parse(productosData);

console.log('Precios recuperados:', preciosRecuperados);
console.log('Productos recuperados:', productosRecuperados);

