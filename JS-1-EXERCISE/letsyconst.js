// Declarar una variable con let (modificable)
let numero = 10;

// Declarar una variable con const (constante, no se puede modificar)
const saludo = "¡Hola, JavaScript!";

// Mostrar ambos valores en la consola
console.log("Número:", numero);
console.log("Saludo:", saludo);

// Si intentas cambiar el valor de la constante 'saludo' se generará un error:
// saludo = "Nuevo saludo";  // Esto dará error porque 'saludo' es una constante

// Si modificas la variable 'numero', no habrá problema
numero = 20;  // Esto es válido
console.log("Nuevo número:", numero);
