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

function descargarUltimosPedidos(){
    return new Promise(resolve => {
        console.log('descargando pedidos ...Espere');

        setTimeout(() => {
            console.log('Los pedidos fueron descargados');
        }, 3000);
    });
}

async function app(){
    try {
        // const clientes = await descargarNuevosCliente();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarNuevosCliente(),descargarUltimosPedidos()]);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}


app();
