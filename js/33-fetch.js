// function obtenerEmpleados(){
//     const url = '../empleados.json';
//     fetch(url)
//         .then(resultado => resultado.json())
//         .then(datos => {
//             // console.log(datos.empleados)
//             const {empleados} = datos;

//             // console.log(empleados);
//             empleados.forEach(empleado => {
//                 console.log(empleado)
//                 // console.log(empleado.id);
//                 // console.log(empleado.nombre);
//                 // console.log(empleado.puesto);
//             });

//         });
// }

// obtenerEmpleados();

async function obtenerEmpleados(){
    const url = '../empleados.json';
    const resultado = await fetch(url);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();
