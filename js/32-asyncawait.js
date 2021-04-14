//setInterval se ejectua cada vez que pasan los milisegundos indicados

// setInterval(() => {
//     console.log('Descargando clientes Por favor espere...')
// }, 2000);

function descargarNuevosCliente(){
    return new Promise(resolve => {
        console.log('descargando cliente ...Espere');

        setTimeout(() => {
            console.log('Los clientes fueron descargados');
        }, 5000);
    });
}

async function app(){
    try {
        const resultado = await descargarNuevosCliente();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}


app();
