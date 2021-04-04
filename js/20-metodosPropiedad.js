// Metodos de propiedad
const reproductor = {
    reproducir:function(id){
        console.log(`Reproduciendo Cancion ${id}`);
    },
    pausar:function(){
        console.log('pausando');
    },
    crearPlayList:function(nombre){
        console.log(`creando la playlist ${nombre}`)
    },
    reproducirPlayList:function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`eliminando la cancion ${id}`);
}

reproductor.reproducir(125);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList('electronica');
reproductor.reproducirPlayList('electronica');




