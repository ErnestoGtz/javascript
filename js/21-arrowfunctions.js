//Arrow Functions

const sumar = (n1,n2) => console.log(n1 + n2);

sumar(50,20);

// const aprendiendo = (tecnologia) => {
//     console.log(`aprendiendo ${tecnologia}`)
// }

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);


aprendiendo('ReactJS');



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

meses.forEach( mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

let resultado;

//Some ideal para arreglo de objetos
resultado = carrito.some( producto => producto.nombre == 'Iphone XR');

//Reduce
resultado = carrito.reduce((total,producto) => total + producto.precio,0);



//Filter 
resultado = carrito.filter(producto => producto.precio > 5000);

console.log(resultado);