const producto = {
    nombreProducto:"Monitor de 20 pulgadas",
    precio:200,
    disponible:true
}

const medidas = {
    peso:'1kg',
    medida:'1m'
}

const nuevoProducto = { ...producto, ...medidas };

console.log(nuevoProducto);