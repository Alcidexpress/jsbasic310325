class Rectangulo {
    // Constructor que inicializa las propiedades de ancho y alto
    constructor(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
    }
  
    // Método que calcula el área del rectángulo
    area() {
      return this.ancho * this.alto;
    }
  }
  
  // Crear una instancia de la clase Rectangulo
  let miRectangulo = new Rectangulo(5, 10);
  
  // Mostrar el área del rectángulo
  console.log(miRectangulo.area());  // Imprime: 50
  