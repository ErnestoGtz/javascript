/* Object literal */
const producto = {
    descripcion:'Tablet',
    precio:3500
}


// Object Constructor
function Cliente(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(){
    return `El cliente ${this.cliente} ${this.apellido}`;
}


function Producto(descripcion,precio,disponible){
    this.descripcion = descripcion;
    this.precio = precio;
    this.disponible = disponible;
}

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.descripcion} tiene un precio de $ ${this.precio}`;
}


const cliente2 = new Cliente('Ernesto','Gutierrez');
const producto2 = new Producto('Monitor Curvo 27',800,true);
const producto3 = new Producto('Monitor Curvo 32',1800,false);


// function formatearProducto(producto){
//     return `El producto ${producto.descripcion} tiene un precio de $ ${producto.precio}`;
// }

// console.log(producto2);
// console.log(formatearProducto(producto2));
console.log(cliente2);

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

    
