function crearContador() {
    let contador = 0;  // Variable privada que mantiene el estado interno
  
    // La función retornada tiene acceso a la variable 'contador'
    return function() {
      contador++;  // Incrementa el contador
      return contador;  // Devuelve el siguiente número consecutivo
    };
  }
  
  // Crear un contador
  let miContador = crearContador();
  
  // Llamar al contador varias veces
  console.log(miContador());  // Imprime: 1
  console.log(miContador());  // Imprime: 2
  console.log(miContador());  // Imprime: 3
  