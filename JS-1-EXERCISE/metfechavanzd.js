// Crear un objeto Date para obtener la fecha y hora actual
let fechaActual = new Date();

// Obtener las horas, minutos y segundos
let horas = String(fechaActual.getHours()).padStart(2, '0');
let minutos = String(fechaActual.getMinutes()).padStart(2, '0');
let segundos = String(fechaActual.getSeconds()).padStart(2, '0');

// Mostrar la hora actual en formato HH:MM:SS
let horaFormateada = `${horas}:${minutos}:${segundos}`;
console.log("Hora actual:", horaFormateada);
