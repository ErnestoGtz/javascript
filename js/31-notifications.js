const boton = document.querySelector('#boton');

boton.addEventListener('click',function(){
    // console.log('se presiono el boton');
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`));

});

if(Notification.permission == 'granted'){
    new Notification('Esta es una notificacion',{
        icon:'img/icono.png',
        body:'Codigo con Neto los mejores tutoriales'
    });
}