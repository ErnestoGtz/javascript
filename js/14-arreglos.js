const numeros = [10,20,30,40,50];

// console.log(numeros);

// console.table(numeros);

//const meses = new Array('Enero','Febrero','Marzo','Abril');

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];

//arreglos pueden tener diferentes tipos de datos 

// const arreglo = ['hola',20,true,'neto'];

// console.log(arreglo);

//acceder a una posicion del arreglo
// console.log(numeros[4]);

//Conocer el tamano del arreglo

// console.log(meses.length);

// numeros.forEach(function(numero){
//     console.log(numero);
// });

//numeros[5] = 60;
numeros.push(60);
numeros.push(70); // Agrega valores al final del arreglo
numeros.unshift(-10,-20,-30); //agrega valores al inicio del arreglo
console.log(numeros);

//meses.pop(); //Elimina el ultimo elemento del arreglo
//meses.shift(); //Elimina el primer elemento del arreglo

meses.splice(2,2);

console.log(meses);

// Rest operator o Spread Operator

const nuevoArreglo = [...meses,'Junio'];
console.log(nuevoArreglo);
