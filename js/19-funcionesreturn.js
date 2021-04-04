// function sumar(numero1 = 0,numero2 = 0){
//     return numero1 + numero2;    
// }

// const resultado = sumar(5,8);

// console.log(resultado);

let total = 0;

function agregarProducto(precio){
    return total += precio;
}

function calucularImpuesto(total){
    return total * 1.15;
}

total = agregarProducto(200);
total = agregarProducto(400);
total = agregarProducto(600);

console.log(total);

const totalPago = calucularImpuesto(total);

console.log(`El total a pagar incluyendo impuestos es de $${totalPago}`);
