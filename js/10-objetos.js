const nombreProducto = "Monitor de 20 Pulgadas";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto:"Monitor de 20 pulgadas",
    precio:200,
    disponible:true
}



// console.log(producto.nombreProducto);
// console.log(producto.precio);

// console.log(producto['disponible']);

//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

delete producto.disponible;

console.log(producto);