'use strict'; // Correr Javascript en modo estricto

//Objetos
const producto = {
    nombreProducto:"Monitor de 20 pulgadas",
    precio:200,
    disponible:true
}

// con freeze previene que puedan agregar nuevas propiedades a tus objetos
Object.freeze(producto); // .freeze no te permite agregar ni modificar .seal te permite modificar

producto.imagen = 'imagen.jpg';

console.log(producto);