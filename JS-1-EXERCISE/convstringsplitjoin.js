let frutas = "manzana,banana,pera";

// Convertir el string en un array utilizando split
let arrayFrutas = frutas.split(",");

// Convertir el array de nuevo en un string con guiones utilizando join
let resultado = arrayFrutas.join("-");

console.log(resultado);
