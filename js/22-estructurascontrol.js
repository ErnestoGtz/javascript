// const puntaje = 1000;

// if(puntaje !== 1000){
//     console.log('No es igual');
    
// } else {
//     console.log('El puntaje es 1000');
// }

// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito){
//     console.log('El usuario puece pagar');
// } else {
//     console.log('Fondos Insuficientes');
// }

const rol = 'Edr';

if(rol === 'Administrador'){
    console.log('Acceso a todo el sistema');
} else if(rol === 'Editor') {
    console.log('Eres editor, tienes acceso limitado');
} else {
    console.log('No tienes acceso');
}