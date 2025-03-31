// Crear la función que recibe un número y devuelve true si es par, false si es impar
function esPar(numero) {
    if (numero % 2 === 0) {
        return true;  // Es par
    } else {
        return false; // Es impar
    }
}

// Llamar a la función con varios números y mostrar los resultados
console.log(esPar(4));  // true (4 es par)
console.log(esPar(7));  // false (7 es impar)
console.log(esPar(10)); // true (10 es par)
console.log(esPar(15)); // false (15 es impar)
