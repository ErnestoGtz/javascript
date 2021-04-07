const reservacion = {
    nombre:'Ernesto',
    apellido:'Gutierrez',
    total:5000,
    pagado:true,
    informacion:function(){
        console.log(`El cliente ${this.nombre} reservo 2 noches y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();