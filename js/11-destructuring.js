const producto = {
    nombreProducto:"Monitor de 20 pulgadas",
    precio:200,
    disponible:true,
    marca:'Asus'
}

//Forma Anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

//destructuring objects

const { precio, nombreProducto } = producto;

console.log(precio);
console.log(nombreProducto);