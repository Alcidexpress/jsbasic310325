// Crear un objeto simple
let persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };
  
  // Convertir el objeto a JSON
  let jsonString = JSON.stringify(persona);
  console.log(jsonString);  // Muestra el objeto como una cadena JSON
  
  // Convertir el JSON de vuelta a un objeto
  let objetoDesdeJSON = JSON.parse(jsonString);
  console.log(objetoDesdeJSON);  // Muestra el objeto original
  