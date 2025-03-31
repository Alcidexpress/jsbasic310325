// Crear un objeto Date para obtener la fecha y hora actual
let fechaActual = new Date();

// Obtener el día, mes y año
let dia = fechaActual.getDate();
let mes = fechaActual.getMonth() + 1; // Los meses empiezan desde 0, por eso sumamos 1
let año = fechaActual.getFullYear();

// Mostrar la fecha completa en la consola
console.log(`La fecha actual es: ${dia}/${mes}/${año}`);
