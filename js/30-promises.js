const usuarioAutenticado = new Promise((resolve,reject)=>{
    const auth = true;
    if(auth){
        resolve('Usuario Autenticado');
    } else {
        reject('No se puede iniciar sesion');
    }
});


usuarioAutenticado.then(resultado => console.log(resultado))
                    .catch(error => console.log(error));

//console.log(usuarioAutenticado);

//existen 3 valores en las promises
//pending no se ha complido pero tampoco rechazado
//fulfilled Ya se cumplio
// rejected: se ha rechazado o no se puede cumplir

