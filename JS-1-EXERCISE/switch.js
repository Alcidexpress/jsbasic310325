// Número que representa un día de la semana (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
let numeroDia = 3;  // Cambia este número para probar diferentes días

// Usar switch para determinar el día de la semana
switch (numeroDia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Número no válido. Por favor ingresa un número entre 0 y 6.");
        break;
}
