const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
const carrito = [
    {
        nombre:'Monitor 20 Pulgadas',
        precio:2000
    },
    {
        nombre:'Audifonos Gamer',
        precio:1000
    },
    {
        nombre:'Laptop Gamer MSI',
        precio:25000
    },
    {
        nombre:'Teclado Mecanico',
        precio:1250
    },
    {
        nombre:'Iphone XR',
        precio:10000
    },
    {
        nombre:'Bocinas Logitech',
        precio:550
    }
];

//forEach

meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//Includes 
let resultado = meses.includes('Marzo');
console.log(resultado);

//Some ideal para arreglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre == 'Iphone XR';
});


//Reduce
resultado = carrito.reduce(function(total,producto){
    return total + producto.precio
},0);

console.log(resultado);

//Filter 
resultado = carrito.filter(function(producto){
    return producto.precio > 5000;
});

console.log(resultado);